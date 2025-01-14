import{a as q}from"./chunk-YDUJKTJQ.js";import{j as R}from"./chunk-SWZYHCA4.js";import{$a as _,E as $,Fa as u,Ia as F,J as G,K as P,Ka as N,Pa as E,Qa as L,S as V,Ya as H,cb as U,h as T,i as z,la as M}from"./chunk-KR7JTV7U.js";function oe(e,l){return!!e.children(l).length}function ne(e){return A(e.v)+":"+A(e.w)+":"+A(e.name)}var Q=/:/g;function A(e){return e?String(e).replace(Q,"\\:"):""}function j(e,l){l&&e.attr("style",l)}function se(e,l,c){l&&e.attr("class",l).attr("class",c+" "+e.attr("class"))}function ie(e,l){var c=l.graph();if(M(c)){var a=c.transition;if(V(a))return a(e)}return e}function W(e,l){var c=e.append("foreignObject").attr("width","100000"),a=c.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var i=l.label;switch(typeof i){case"function":a.insert(i);break;case"object":a.insert(function(){return i});break;default:a.html(i)}j(a,l.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var d=a.node().getBoundingClientRect();return c.attr("width",d.width).attr("height",d.height),c}var X={},Z=function(e){let l=Object.keys(e);for(let c of l)X[c]=e[c]},J=function(e,l,c,a,i,d){let h=a.select(`[id="${c}"]`);Object.keys(e).forEach(function(p){let r=e[p],g="default";r.classes.length>0&&(g=r.classes.join(" ")),g=g+" flowchart-label";let w=L(r.styles),t=r.text!==void 0?r.text:r.id,s;if(u.info("vertex",r,r.labelType),r.labelType==="markdown")u.info("vertex",r,r.labelType);else if(F(_().flowchart.htmlLabels)){let m={label:t.replace(/fa[blrs]?:fa-[\w-]+/g,k=>`<i class='${k.replace(":"," ")}'></i>`)};s=W(h,m).node(),s.parentNode.removeChild(s)}else{let m=i.createElementNS("http://www.w3.org/2000/svg","text");m.setAttribute("style",w.labelStyle.replace("color:","fill:"));let k=t.split(N.lineBreakRegex);for(let C of k){let v=i.createElementNS("http://www.w3.org/2000/svg","tspan");v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),v.setAttribute("dy","1em"),v.setAttribute("x","1"),v.textContent=C,m.appendChild(v)}s=m}let b=0,o="";switch(r.type){case"round":b=5,o="rect";break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"odd_right":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}l.setNode(r.id,{labelStyle:w.labelStyle,shape:o,labelText:t,labelType:r.labelType,rx:b,ry:b,class:g,style:w.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:d.db.getTooltip(r.id)||"",domId:d.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:_().flowchart.padding}),u.info("setNode",{labelStyle:w.labelStyle,labelType:r.labelType,shape:o,labelText:t,rx:b,ry:b,class:g,style:w.style,id:r.id,domId:d.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:_().flowchart.padding})})},K=function(e,l,c){u.info("abc78 edges = ",e);let a=0,i={},d,h;if(e.defaultStyle!==void 0){let n=L(e.defaultStyle);d=n.style,h=n.labelStyle}e.forEach(function(n){a++;let p="L-"+n.start+"-"+n.end;i[p]===void 0?(i[p]=0,u.info("abc78 new entry",p,i[p])):(i[p]++,u.info("abc78 new entry",p,i[p]));let r=p+"-"+i[p];u.info("abc78 new link id to be used is",p,r,i[p]);let g="LS-"+n.start,w="LE-"+n.end,t={style:"",labelStyle:""};switch(t.minlen=n.length||1,n.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let s="",b="";switch(n.stroke){case"normal":s="fill:none;",d!==void 0&&(s=d),h!==void 0&&(b=h),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(n.style!==void 0){let o=L(n.style);s=o.style,b=o.labelStyle}t.style=t.style+=s,t.labelStyle=t.labelStyle+=b,n.interpolate!==void 0?t.curve=E(n.interpolate,$):e.defaultInterpolate!==void 0?t.curve=E(e.defaultInterpolate,$):t.curve=E(X.curve,$),n.text===void 0?n.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=n.labelType,t.label=n.text.replace(N.lineBreakRegex,`
`),n.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=r,t.classes="flowchart-link "+g+" "+w,l.setEdge(n.start,n.end,t,a)})},O=function(e,l){return l.db.getClasses()},ee=async function(e,l,c,a){u.info("Drawing flowchart");let i=a.db.getDirection();i===void 0&&(i="TD");let{securityLevel:d,flowchart:h}=_(),n=h.nodeSpacing||50,p=h.rankSpacing||50,r;d==="sandbox"&&(r=T("#i"+l));let g=d==="sandbox"?T(r.nodes()[0].contentDocument.body):T("body"),w=d==="sandbox"?r.nodes()[0].contentDocument:document,t=new R({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:n,ranksep:p,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),s,b=a.db.getSubGraphs();u.info("Subgraphs - ",b);for(let f=b.length-1;f>=0;f--)s=b[f],u.info("Subgraph - ",s),a.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);let o=a.db.getVertices(),m=a.db.getEdges();u.info("Edges",m);let k=0;for(k=b.length-1;k>=0;k--){s=b[k],z("cluster").append("text");for(let f=0;f<s.nodes.length;f++)u.info("Setting up subgraphs",s.nodes[f],s.id),t.setParent(s.nodes[f],s.id)}J(o,t,l,g,w,a),K(m,t);let C=g.select(`[id="${l}"]`),v=g.select("#"+l+" g");if(await q(v,t,["point","circle","cross"],"flowchart",l),H.insertTitle(C,"flowchartTitleText",h.titleTopMargin,a.db.getDiagramTitle()),U(t,C,h.diagramPadding,h.useMaxWidth),a.db.indexNodes("subGraph"+k),!h.htmlLabels){let f=w.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(let x of f){let S=x.getBBox(),y=w.createElementNS("http://www.w3.org/2000/svg","rect");y.setAttribute("rx",0),y.setAttribute("ry",0),y.setAttribute("width",S.width),y.setAttribute("height",S.height),x.insertBefore(y,x.firstChild)}}Object.keys(o).forEach(function(f){let x=o[f];if(x.link){let S=T("#"+l+' [id="'+f+'"]');if(S){let y=w.createElementNS("http://www.w3.org/2000/svg","a");y.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),y.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),y.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?y.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&y.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);let B=S.insert(function(){return y},":first-child"),I=S.select(".label-container");I&&B.append(function(){return I.node()});let D=S.select(".label");D&&B.append(function(){return D.node()})}}})},we={setConf:Z,addVertices:J,addEdges:K,getClasses:O,draw:ee},te=(e,l)=>{let c=P,a=c(e,"r"),i=c(e,"g"),d=c(e,"b");return G(a,i,d,l)},re=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${te(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,ye=re;export{oe as a,ne as b,j as c,se as d,ie as e,W as f,we as g,ye as h};
