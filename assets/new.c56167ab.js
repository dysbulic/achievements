import { j as jsxs, a as jsx, H as HelmetExport, c as chakra, e as useWeb3, u as useSearchParams, r as react, af as tokenPermissions, a1 as Spinner, ag as rolePermissions } from "./index.ee52586c.js";
import { u as useForm, I as Input } from "./index.esm.b14f5311.js";
import { H as Header } from "./Header.8e5ffbe7.js";
import { O as OptionsForm } from "./MaxForm.86d0a003.js";
import { C as Container, F as Flex, e as extractMessage, c as Center, S as Stack, H as Heading, T as Text, d as Table, f as Thead, g as Tr, i as Th, b as Tooltip, j as Tbody, k as Td } from "./LinkedSVG.dcd30e1b.js";
import { S as SubmitButton } from "./SubmitButton.9541d623.js";
import { u as useToast } from "./chakra-ui-toast.esm.226fadbb.js";
import { C as Checkbox } from "./chakra-ui-checkbox.esm.e67ded93.js";
import "./chakra-ui-form-control.esm.0ea3eb5a.js";
import "./chakra-ui-textarea.esm.646f61ee.js";
import "./chakra-ui-image.esm.643ec633.js";
import "./chakra-ui-button.esm.81233fed.js";
import "./chakra-ui-alert.esm.67767496.js";
const New = () => /* @__PURE__ */ jsxs(Container, {
  maxW: "full",
  children: [/* @__PURE__ */ jsx(HelmetExport, {
    children: /* @__PURE__ */ jsx("title", {
      children: "\u2019\u{1D588}\u{1D58D}\u{1D58E}\u{1D58A}\u{1D59B}\u{1D58A}: \u2C9A\u2C89\u2CB1 \u2CA6\u2C9F\u2C95\u2C89\u2C9B"
    })
  }), /* @__PURE__ */ jsx(chakra.header, {
    children: /* @__PURE__ */ jsx(Flex, {
      justify: "center",
      children: /* @__PURE__ */ jsx(Header, {
        my: "7vh",
        maxW: "xl"
      })
    })
  }), /* @__PURE__ */ jsx(chakra.main, {
    children: /* @__PURE__ */ jsx(Content, {})
  })]
});
const Content = () => {
  const {
    ensProvider,
    roContract,
    rwContract,
    rolesLibrary,
    connecting,
    connect,
    chain,
    address
  } = useWeb3();
  const [search, setSearch] = useSearchParams({
    tokenId: ""
  });
  const id = search.get("tokenId");
  const [tokenId, setTokenId] = react.exports.useState(Array.isArray(id) ? id[0] : id);
  const [roles, setRoles] = react.exports.useState(tokenPermissions);
  const [working, setWorking] = react.exports.useState(false);
  const {
    register,
    handleSubmit
  } = useForm();
  const toast = useToast();
  react.exports.useEffect(() => {
    if (typeof id === "string") {
      setTokenId(id);
    }
  }, [id]);
  react.exports.useEffect(() => {
  }, [roContract]);
  const reserve = react.exports.useCallback(async (data) => {
    setWorking(true);
    try {
      if (!rwContract) {
        throw new Error("Connect your wallet to reserve an id.");
      }
      if (!rolesLibrary) {
        throw new Error("Library not loaded.");
      }
      const grants = [];
      const disables = [];
      await Promise.all(Object.entries(data).map(async ([key, value]) => {
        if (typeof value === "boolean" && value) {
          const [, type, role] = key.match(/^(grant|disable)\((.+)\)$/) ?? [];
          const roleId = await rolesLibrary.roleIndexForName(role);
          switch (type) {
            case "grant": {
              grants.push(roleId);
              break;
            }
            case "disable": {
              disables.push(roleId);
              break;
            }
            default: {
              throw new Error(`Unknown operation: ${type}`);
            }
          }
        }
      }));
      let {
        maintainer
      } = data;
      if (maintainer === "") {
        maintainer = address;
      }
      if (maintainer == null) {
        throw new Error("`maintainer` is not set.");
      }
      if (maintainer.includes(".")) {
        if (!ensProvider) {
          throw new Error("ENS provider not defined.");
        }
        maintainer = await ensProvider.resolveName(maintainer) ?? void 0;
      }
      const tx = await rwContract["create(address,uint8[],uint8[])"](maintainer, grants, disables);
      const receipt = await tx.wait();
      const event = receipt.events.find((evt) => evt.event === "Created");
      if (!event) {
        throw new Error("Couldn\u2019t find a creation event.");
      }
      const [id2] = event.args;
      setTokenId(id2.toHexString());
    } catch (error) {
      toast({
        title: "Creation Error",
        description: extractMessage(error),
        status: "error",
        isClosable: true,
        duration: 1e4
      });
      console.error(error.stack);
    } finally {
      setWorking(false);
    }
  }, [address, ensProvider, rolesLibrary, rwContract, toast]);
  if (!rwContract || !tokenId || working) {
    return /* @__PURE__ */ jsx(Center, {
      children: /* @__PURE__ */ jsxs(Stack, {
        children: [/* @__PURE__ */ jsx(Heading, {
          textAlign: "center",
          children: "Create a New Token Type"
        }), (() => {
          if (connecting) {
            return /* @__PURE__ */ jsxs(Flex, {
              justify: "center",
              children: [/* @__PURE__ */ jsx(Spinner, {
                thickness: "4px"
              }), /* @__PURE__ */ jsx(Text, {
                ml: 2,
                children: "Connecting\u2026"
              })]
            });
          }
          if (working) {
            return /* @__PURE__ */ jsxs(Flex, {
              justify: "center",
              mt: 7,
              children: [/* @__PURE__ */ jsx(Spinner, {}), /* @__PURE__ */ jsx(Text, {
                ml: 2,
                children: "Reserving your token\u2026"
              })]
            });
          }
          if (!tokenId) {
            return /* @__PURE__ */ jsxs(Stack, {
              as: "form",
              onSubmit: handleSubmit(reserve),
              children: [/* @__PURE__ */ jsxs(Flex, {
                align: "center",
                children: [/* @__PURE__ */ jsx(chakra.label, {
                  mr: 3,
                  children: "Admin:"
                }), /* @__PURE__ */ jsx(Input, {
                  ...register("maintainer"),
                  placeholder: "Maintainer Address (default Creator)"
                })]
              }), /* @__PURE__ */ jsxs(Table, {
                mb: 5,
                children: [/* @__PURE__ */ jsx(Thead, {
                  children: /* @__PURE__ */ jsxs(Tr, {
                    children: [/* @__PURE__ */ jsx(Th, {
                      children: "Role"
                    }), /* @__PURE__ */ jsx(Th, {
                      children: /* @__PURE__ */ jsx(Tooltip, {
                        label: "Give the admin these roles:",
                        children: "Grant"
                      })
                    }), /* @__PURE__ */ jsx(Th, {
                      children: /* @__PURE__ */ jsx(Tooltip, {
                        label: "Prevent these permissions from being checked:",
                        children: "Disable"
                      })
                    }), /* @__PURE__ */ jsx(Th, {
                      children: "Description"
                    })]
                  })
                }), /* @__PURE__ */ jsx(Tbody, {
                  children: roles.map((role, idx) => /* @__PURE__ */ jsxs(Tr, {
                    children: [/* @__PURE__ */ jsx(Td, {
                      children: role
                    }), /* @__PURE__ */ jsx(Td, {
                      textAlign: "center",
                      children: /* @__PURE__ */ jsx(Checkbox, {
                        ...register(`grant(${role})`)
                      })
                    }), /* @__PURE__ */ jsx(Td, {
                      textAlign: "center",
                      children: /* @__PURE__ */ jsx(Checkbox, {
                        ...register(`disable(${role})`)
                      })
                    }), /* @__PURE__ */ jsx(Td, {
                      children: rolePermissions[role]
                    })]
                  }, idx))
                })]
              }), /* @__PURE__ */ jsx(SubmitButton, {
                purpose: "create",
                label: "Reserve an ID"
              })]
            });
          }
          return /* @__PURE__ */ jsx(Text, {
            children: "\xBFHow\u2019d we get here?"
          });
        })()]
      })
    });
  }
  return /* @__PURE__ */ jsx(OptionsForm, {
    tokenId
  });
};
export {
  New,
  New as default
};
//# sourceMappingURL=new.c56167ab.js.map