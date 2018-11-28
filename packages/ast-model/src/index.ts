import * as defaultNodeUtils from "./default-nodes";
import * as modelUtils from "./model-utils";
import * as sourceUtils from "./source-gen";

export const ASTUtil = {
    ...sourceUtils,
    ...modelUtils,
    ...defaultNodeUtils,
};

export * from "./ast-interfaces";
export * from "./base-visitor";
export * from "./check-kind-util";
