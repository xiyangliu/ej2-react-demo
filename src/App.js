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
import { Button } from 'semantic-ui-react'
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

  handleSave() {
    let diagramElement = document.getElementById('diagram');
    let diagram: Object[] = diagramElement.ej2_instances[0];
    let saveData: string;
    saveData = diagram.saveDiagram();

    const element = document.createElement("a");
    const file = new Blob([saveData], { type: 'json' });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

    console.log(saveData);
  }

  handleImport() {
    let saveData = '{"selectionChange":{},"snapSettings":{"constraints":0,"verticalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20]},"horizontalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20]}},"getNodeDefaults":{},"getConnectorDefaults":{},"enableRtl":false,"locale":"en-US","enablePersistence":false,"scrollSettings":{"viewPortWidth":1129.5,"viewPortHeight":751.8333740234375,"currentZoom":1,"horizontalOffset":0,"verticalOffset":0,"padding":{"left":0,"right":0,"top":0,"bottom":0},"canAutoScroll":false},"rulerSettings":{"showRulers":false},"width":"100%","height":"100%","backgroundColor":"transparent","dataSourceSettings":{"crudAction":{"read":""}},"mode":"SVG","layers":[{"id":"default_layer","visible":true,"lock":false,"objects":["ActionxSDmv","ActionD5wiG","connectoroOARR"],"zIndex":0}],"nodes":[{"shape":{"type":"UmlActivity","shape":"Action"},"id":"ActionxSDmv","width":50,"height":50,"style":{"fill":"white","strokeColor":"#95adbe","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"container":null,"offsetX":450.75,"offsetY":438,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":50,"height":50},"offsetX":450.75,"offsetY":438},"constraints":20973542,"zIndex":0,"ports":[{"offset":{"x":0,"y":0.5},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"aK0iR","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"offset":{"x":1,"y":0.5},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"Cr1wv","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"offset":{"x":0.5,"y":1},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"gu7cH","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"offset":{"x":0.5,"y":0},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"KC6Gg","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"annotations":[],"isExpanded":true,"expandIcon":{"shape":"None"},"inEdges":[],"outEdges":["connectoroOARR"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"UmlActivity","shape":"Action"},"id":"ActionD5wiG","width":50,"height":50,"style":{"fill":"white","strokeColor":"#95adbe","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"container":null,"offsetX":750.75,"offsetY":429,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":50,"height":50},"offsetX":750.75,"offsetY":429},"constraints":20973542,"zIndex":1,"ports":[{"offset":{"x":0,"y":0.5},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"RMbo5","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"offset":{"x":1,"y":0.5},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"vgdbc","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"offset":{"x":0.5,"y":1},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"TFuTT","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"offset":{"x":0.5,"y":0},"style":{"fill":"#95adbe","strokeColor":"#95adbe","opacity":1,"strokeDashArray":"","strokeWidth":1},"width":10,"height":10,"constraints":28,"visibility":1,"shape":"Circle","id":"iDltZ","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"annotations":[],"isExpanded":true,"expandIcon":{"shape":"None"},"inEdges":["connectoroOARR"],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"connectors":[{"type":"Orthogonal","sourcePortID":"Cr1wv","sourcePoint":{"x":475.75,"y":438},"targetPoint":{"x":725.75,"y":429},"shape":{"type":"None"},"id":"connectoroOARR","zIndex":2,"style":{"strokeWidth":1,"strokeColor":"#574f7d","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","width":5,"height":5,"style":{"fill":"#c","strokeColor":"#574f7d","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","length":null,"direction":null}],"sourceID":"ActionxSDmv","targetID":"ActionD5wiG","targetPortID":"RMbo5","flip":"None","sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":250,"height":9},"offsetX":600.75,"offsetY":433.5},"annotations":[],"visible":true,"constraints":11838,"sourcePadding":0,"targetPadding":0,"hitPadding":10,"ports":[],"parentId":""}],"pageSettings":{"orientation":"Landscape","height":null,"width":null,"background":{"source":"","color":"transparent"},"showPageBreaks":false,"boundaryConstraints":"Infinity"},"selectedItems":{"nodes":[],"connectors":[],"wrapper":null,"constraints":16382,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"width":250,"height":9,"offsetX":600.75,"offsetY":433.5,"userHandles":[]},"constraints":500,"basicElements":[],"tooltip":{"content":"","relativeMode":"Mouse"},"commandManager":{"commands":[]},"tool":3,"drawingObject":{"type":"Orthogonal","sourcePortID":"gu7cH"},"layout":{"type":"None"},"version":17.1}';
    let diagramElement = document.getElementById('diagram');
    let diagram: Object[] = diagramElement.ej2_instances[0];
    diagram.loadDiagram(saveData);

  }

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
        <Button variant="primary" size="lg" onClick={this.handleSave}>
          Save Button
        </Button>
        <Button variant="primary" size="lg" onClick={this.handleImport}>
          Load button
        </Button>
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
