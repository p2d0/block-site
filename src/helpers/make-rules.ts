import removeProtocol from "./remove-protocol";

type RuleType = "allow" | "block"

export interface Rule {
  type: RuleType
  path: string
}

export default (blocked: string[]): Rule[] => {
  return blocked.map((item) => {
    const isAllow = item.startsWith("!");
    const path = removeProtocol(isAllow ? item.substring(1) : item);
    return { type: isAllow ? "allow" : "block", path } as Rule;
  }).reverse();
};
