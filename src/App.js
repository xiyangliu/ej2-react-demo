import React from "react";
import {
  DiagramComponent,
  Inject,
  Node,
  NodeConstraints,
  PortConstraints,
  PortVisibility,
  SymbolPaletteComponent,
  UndoRedo
} from "@syncfusion/ej2-react-diagrams";
import { nodes, ports } from "./data";

let diagramInstance;

class App extends React.Component {
  state = { selectedItem: null };

  enrichNode = node => {
    node.constraints =
      (NodeConstraints.Default | NodeConstraints.HideThumbs) &
      ~NodeConstraints.Resize &
      ~NodeConstraints.Rotate;
    if (node.oldProperties.id) {
      node.ports = [...ports[node.oldProperties.id]];
      node.ports.forEach(this.enrichPort);
    }
  };

  enrichPort = port => {
    port.style = {
      fill: "#95adbe",
      strokeColor: "#95adbe"
    };
    port.width = 10;
    port.height = 10;
    port.constraints = PortConstraints.Default | PortConstraints.Draw;
    port.visibility = PortVisibility.Visible;
    port.shape = "Circle";
  };

  enrichConnector = connector => {
    connector.type = "Orthogonal";
    connector.style = { strokeColor: "#574f7d", strokeWidth: 1 };
    connector.targetDecorator = {
      width: 5,
      height: 5,
      style: { fill: "#c", strokeColor: "#574f7d" }
    };
  };

  enrichSymbol = symbol => {
    switch (symbol.id) {
      case "JoinNode":
        symbol.width = 20;
        symbol.height = 50;
        break;
      case "ForkNode":
        symbol.width = 50;
        symbol.height = 20;
        break;
      case "Decision":
      case "MergeNode":
        symbol.width = 50;
        symbol.height = 40;
        break;
      default:
        symbol.width = 50;
        symbol.height = 50;
    }

    if (
      symbol.id === "InitialNode" ||
      symbol.id === "FinalNode" ||
      symbol.id === "JoinNode" ||
      symbol.id === "ForkNode"
    ) {
      symbol.style.fill = "#dff0ea";
    }
    symbol.style.strokeColor = "#95adbe";
  };

  render() {
    return (
      <div className="ui equal height stretched grid internally celled">
        <div className="ui three wide column">
          <SymbolPaletteComponent
            id="symbolpalette"
            expandMode="Multiple"
            palettes={[
              {
                id: "nodes",
                expanded: true,
                symbols: nodes,
                title: "节点"
              }
            ]}
            getNodeDefaults={this.enrichSymbol}
            symbolHeight={80}
            symbolWidth={80}
            symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
            getSymbolInfo={() => ({ fit: true })}
          >
            <Inject services={[UndoRedo]} />
          </SymbolPaletteComponent>
        </div>
        <div className="ui ten wide column">
          <DiagramComponent
            id="diagram"
            ref={diagram => {
              diagramInstance = diagram;
            }}
            selectionChange={select}
            snapSettings={{ constraints: 0 }}
            getNodeDefaults={this.enrichNode}
            getConnectorDefaults={this.enrichConnector}
          />
        </div>
        <div className="ui three wide column" />
      </div>
    );
  }
}

const select = args => {
  if (
    args.state === "Changed" &&
    args.newValue &&
    args.newValue[0] instanceof Node
  ) {
    console.log(args.newValue[0]);
  }
};

export default App;
