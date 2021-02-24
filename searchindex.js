Object.assign(window.search, {"doc_urls":["index.html#const-generics-project-group","index.html#how-can-i-get-involved","index.html#building-documentation","CHARTER.html#const-generics-charter","CHARTER.html#goals","CHARTER.html#constraints-and-considerations","meetings/index.html#meetings","draft-rfcs/index.html#rfc-drafts"],"index":{"documentStore":{"docInfo":{"0":{"body":49,"breadcrumbs":5,"title":4},"1":{"body":22,"breadcrumbs":2,"title":1},"2":{"body":10,"breadcrumbs":3,"title":2},"3":{"body":8,"breadcrumbs":4,"title":3},"4":{"body":41,"breadcrumbs":2,"title":1},"5":{"body":7,"breadcrumbs":3,"title":2},"6":{"body":7,"breadcrumbs":2,"title":1},"7":{"body":7,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"project group status: active The const generics project group implements and designs the const_generics feature. Please refer to our charter for more information on our goals and current scope. Examples: struct Foo<const N: usize> { field: [u8; N],\n} fn foo<const N: usize>() -> Foo<N> { Foo { field: [0; N], }\n} fn main() { match foo::<3>().field { [0, 0, 0] => {} // ok [_x, _y, _z] => panic!(), }\n}","breadcrumbs":"Welcome » Const Generics Project Group","id":"0","title":"Const Generics Project Group"},"1":{"body":"You can find a list of the current members available on rust-lang/team. If you'd like to participate be sure to check out the relevant stream on zulip , feel free to introduce yourself over there and ask us any questions you have.","breadcrumbs":"Welcome » How Can I Get Involved?","id":"1","title":"How Can I Get Involved?"},"2":{"body":"This repository is also an mdbook project. You can view and build it using the following command. mdbook serve","breadcrumbs":"Welcome » Building Documentation","id":"2","title":"Building Documentation"},"3":{"body":"The goal of this group is to both improve and extend the support for const generics.","breadcrumbs":"Charter » Const Generics Charter","id":"3","title":"Const Generics Charter"},"4":{"body":"Improving the user experience when using and working on const generics. This includes both improvements to diagnostics for the already stabilized parts as well as adding new features: const param defaults struct Foo<const N: usize = 3> more const param types, most importantly user defined types and &'static str allowing complex generic operations in constants","breadcrumbs":"Charter » Goals","id":"4","title":"Goals"},"5":{"body":"At least for the near future, we will mostly focus on the items mentioned above.","breadcrumbs":"Charter » Constraints And Considerations","id":"5","title":"Constraints And Considerations"},"6":{"body":"This folder contains the minutes of all the recorded meetings that have happened so far.","breadcrumbs":"Meetings » Meetings","id":"6","title":"Meetings"},"7":{"body":"This folder contains drafts of RFCs that the group is preparing to submit.","breadcrumbs":"Draft RFCs » RFC drafts","id":"7","title":"RFC drafts"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"0":{"tf":2.0}}},"3":{"df":1,"docs":{"4":{"tf":1.0}}},"_":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}},"y":{"df":1,"docs":{"0":{"tf":1.0}}},"z":{"df":1,"docs":{"0":{"tf":1.0}}}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"_":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":3,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"f":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"o":{"c":{"df":0,"docs":{},"u":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{":":{":":{"<":{"3":{">":{"(":{")":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0},"7":{"tf":1.0}}}}}}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"n":{"df":2,"docs":{"0":{"tf":2.0},"4":{"tf":1.0}},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"f":{"c":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"u":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"i":{"df":0,"docs":{},"z":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"z":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"0":{"tf":2.0}}},"3":{"df":1,"docs":{"4":{"tf":1.0}}},"_":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}},"y":{"df":1,"docs":{"0":{"tf":1.0}}},"z":{"df":1,"docs":{"0":{"tf":1.0}}}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":4,"docs":{"0":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"t":{"_":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":3,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":2.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"f":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"o":{"c":{"df":0,"docs":{},"u":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{":":{":":{"<":{"3":{">":{"(":{")":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"4":{"tf":1.4142135623730951}}}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":3,"docs":{"0":{"tf":2.0},"3":{"tf":1.0},"7":{"tf":1.0}}}}}}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.0}}}},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"n":{"df":2,"docs":{"0":{"tf":2.0},"4":{"tf":1.0}},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":2.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"f":{"c":{"df":1,"docs":{"7":{"tf":2.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"u":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"i":{"df":0,"docs":{},"z":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"z":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"title":{"root":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"f":{"c":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});