import hljs from "highlight.js/lib/common";
import 'highlight.js/styles/base16/dracula.css';


import accesslog from "highlight.js/lib/languages/accesslog";
import actionscript from "highlight.js/lib/languages/actionscript";
import apache from "highlight.js/lib/languages/apache";
import arduino from "highlight.js/lib/languages/arduino";
import asciidoc from "highlight.js/lib/languages/asciidoc";
import awk from "highlight.js/lib/languages/awk";
import basic from "highlight.js/lib/languages/basic";
import clojure from "highlight.js/lib/languages/clojure";
import cmake from "highlight.js/lib/languages/cmake";
import dns from "highlight.js/lib/languages/dns";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import dos from "highlight.js/lib/languages/dos";
import excel from "highlight.js/lib/languages/excel";
import glsl from "highlight.js/lib/languages/glsl";
import handlebars from "highlight.js/lib/languages/handlebars";
import haskell from "highlight.js/lib/languages/haskell";
import http from "highlight.js/lib/languages/http";
import latex from "highlight.js/lib/languages/latex";
import lisp from "highlight.js/lib/languages/lisp";
import nginx from "highlight.js/lib/languages/nginx";
import pgsql from "highlight.js/lib/languages/pgsql";
import powershell from "highlight.js/lib/languages/powershell";
import protobuf from "highlight.js/lib/languages/protobuf";
import puppet from "highlight.js/lib/languages/puppet";
import scheme from "highlight.js/lib/languages/scheme";
import yaml from "highlight.js/lib/languages/yaml";
import tap from "highlight.js/lib/languages/tap";
import tcl from "highlight.js/lib/languages/tcl";
import twig from "highlight.js/lib/languages/twig";
import vim from "highlight.js/lib/languages/vim";
import xquery from "highlight.js/lib/languages/xquery";



export default function initHighlight() {
    hljs.registerLanguage("accesslog", accesslog);
    hljs.registerLanguage("actionscript", actionscript);
    hljs.registerLanguage("apache", apache);
    hljs.registerLanguage("arduino", arduino);
    hljs.registerLanguage("asciidoc", asciidoc);
    hljs.registerLanguage("awk", awk);
    hljs.registerLanguage("basic", basic);
    hljs.registerLanguage("clojure", clojure);
    hljs.registerLanguage("cmake", cmake);
    hljs.registerLanguage("dns", dns);
    hljs.registerLanguage("dockerfile", dockerfile);
    hljs.registerLanguage("dos", dos);
    hljs.registerLanguage("excel", excel);
    hljs.registerLanguage("glsl", glsl);
    hljs.registerLanguage("handlebars", handlebars);
    hljs.registerLanguage("haskell", haskell);
    hljs.registerLanguage("http", http);
    hljs.registerLanguage("latex", latex);
    hljs.registerLanguage("lisp", lisp);
    hljs.registerLanguage("nginx", nginx);
    hljs.registerLanguage("pgsql", pgsql);
    hljs.registerLanguage("powershell", powershell);
    hljs.registerLanguage("protobuf", protobuf);
    hljs.registerLanguage("puppet", puppet);
    hljs.registerLanguage("scheme", scheme);
    hljs.registerLanguage("yaml", yaml);
    hljs.registerLanguage("tap", tap);
    hljs.registerLanguage("tcl", tcl);
    hljs.registerLanguage("twig", twig);
    hljs.registerLanguage("vim", vim);
    hljs.registerLanguage("xquery", xquery);


    hljs.highlightAll();
}
