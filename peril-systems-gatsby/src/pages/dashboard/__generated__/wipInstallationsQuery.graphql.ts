/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type wipInstallationsQueryVariables = {};
export type wipInstallationsQueryResponse = {
    readonly me: ({
        readonly installations: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly envVars: any | null;
                    readonly iID: number;
                    readonly login: string;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
};



/*
query wipInstallationsQuery {
  me {
    installations {
      edges {
        node {
          envVars
          iID
          login
          __id: id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "installations",
        "storageKey": null,
        "args": null,
        "concreteType": "InstallationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "InstallationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Installation",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "envVars",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "iID",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "login",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "__id",
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "wipInstallationsQuery",
  "id": null,
  "text": "query wipInstallationsQuery {\n  me {\n    installations {\n      edges {\n        node {\n          envVars\n          iID\n          login\n          __id: id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "wipInstallationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "wipInstallationsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node as any).hash = '8b9d9f07769a730c89e1a9fcfe4318ef';
export default node;
