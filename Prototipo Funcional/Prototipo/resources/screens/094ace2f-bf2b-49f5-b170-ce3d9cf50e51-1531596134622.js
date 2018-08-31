jQuery("#simulation")
  .on("click", ".s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/be7db1d4-4aef-43b6-905a-7ac3135b5496"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Busqueda" ],
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8513d72a-575d-4e16-b15d-582d951a89ef"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/782f67bb-7ab7-4a12-bd2e-13d9def19338"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/752ab556-a3f6-4ca3-ada7-c123a2ab0a0f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Circulo")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"-200" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/43d6083c-9e74-40ab-85fa-f3cb9bc5faf6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/094ace2f-bf2b-49f5-b170-ce3d9cf50e51"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0f75a961-8284-46be-a4d5-8b6a45a6beec"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/31a17c1b-db61-4109-a14c-c899214ac7be"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cad3ac1-978a-4c39-ab28-3fd19ac1778a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e473076-3641-4d49-ba83-a90e28c1e430"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0a4cc503-3324-4d2e-a9d7-85fbcabe8794"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/22e7b335-f9e9-4ec5-9ef7-00fbf716eff4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/beb8ba6e-e38a-4096-8bfc-f68413c249a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4718f330-dc42-4efd-b40c-999b03d07f86"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/be7db1d4-4aef-43b6-905a-7ac3135b5496"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keydown.jim", ".s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 .keydown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Busqueda" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_7",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8513d72a-575d-4e16-b15d-582d951a89ef"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("mouseenter dragenter", ".s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_29") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_29": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_29 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_29 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_5": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_7": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FD9927",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_15": {
                      "attributes-ie": {
                        "-pie-background": "#FD9927",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_37") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_37": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_37 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_37 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_38") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_38": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_38 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_38 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_39") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_39": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_39 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_39 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_40") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_40": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_40 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_40 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_41") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_41": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_41 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_41 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_42": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_42 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_42 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_43": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_43 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_43 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_44": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_44 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_44 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_45": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_45 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Label_45 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Button_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#286090",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#204D74",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#204D74",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#204D74",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#204D74",
                        "border-radius": "6px 6px 6px 6px"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Button_12": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#204D74",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#204D74",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#204D74",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#204D74",
                        "border-radius": "6px 6px 6px 6px",
                        "-pie-background": "#286090",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#286090",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#204D74",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#204D74",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#204D74",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#204D74",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 #s-Button_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#204D74",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#204D74",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#204D74",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#204D74",
                        "border-radius": "5px 5px 5px 5px",
                        "-pie-background": "#286090",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-094ace2f-bf2b-49f5-b170-ce3d9cf50e51 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_38")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_39")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_40")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_41")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_43")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_44")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_45")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    }
  });