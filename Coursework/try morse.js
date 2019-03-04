var morse = {
    a: ". ___/",
    b: "___ . . ./",
    c: "___ . ___ ./",
    d: "___ . ./",
    e: "./",
    f: ". . ___ ./",
    g: "___ ___ ./",
    h: ". . . ./",
    i: ". ./",
    j: ". ___ ___ ___ ___/",
    k: "___ . ___/",
    l: ". ___ . ./",
    m: "___ ___/",
    n: "___ ./",
    o: "___ ___ ___/",
    p: ". ___ ___ ./",
    q: "___ ___ . ___/",
    r: ". ___ ./",
    s: ". . ./",
    t: "___/",
    u: ". . ___/",
    v: ". . . ___/",
    w: ". ___ ___/",
    x: "___ . . ___/",
    y: "___ . ___ ___/",
    z: "___ ___ . ./",
    1: ". ___ ___ ___/",
    2: ". . ___ ___ ___/",
    3: ". . . ___ ___/",
    4: ". . . . ___/",
    5: ". . . . ./",
    6: "___ . . . ./",
    7: "___ ___ . . ./",
    8: "___ ___ ___ . ./",
    9: "___ ___ ___ ___ ./",
    0: "___ ___ ___ ___ ___/",
    " ": "//",
};

 
  var inp = document.getElementById("inp");
  var butt = document.getElementById("encode_button");
  var butt2 = document.getElementById("decode_button");
  var out = document.getElementById("output");
  
  butt.addEventListener("click", function encode_morse() {
    var conv = inp.value;
    conv = conv.toLowerCase();
    conv = conv.split("");
    for (var i = 0; i < conv.length; i++) {
      conv[i] = morse[conv[i]];
    }
    conv = conv.join(" ");
    console.log(conv);
    out.innerHTML = conv;
  });
var alphabet = {
    ". ___/": a,
    "___ . . ./": b,
    "___ . ___ ./": c,
    "___ . ./": d,
    "./": e,
    ". . ___ ./": f,
    "___ ___ ./": g,
    ". . . ./": h,
    ". ./": i,
    ". ___ ___ ___ ___/": j,
    "___ . ___/": k,
    ". ___ . ./": l,
    "___ ___/": m,
    "___ ./": n,
    "___ ___ ___/": o,
    ". ___ ___ ./": p,
    "___ ___ . ___/": q,
    ". ___ ./": r,
    ". . ./": s,
    "___/": t,
    ". . ___/": u,
    ". . . ___/": v,
    ". ___ ___/": w,
    "___ . . ___/": x,
    "___ . ___ ___/": y,
    "___ ___ . ./": z,
    ". ___ ___ ___/": 1,
    ". . ___ ___ ___/": 2,
    ". . . ___ ___/": 3,
    ". . . . ___/": 4,
    ". . . . ./": 5,
    "___ . . . ./": 6,
    "___ ___ . . ./": 7,
    "___ ___ ___ . ./": 8,
    "___ ___ ___ ___ ./": 9,
    "___ ___ ___ ___ ___/": 0,
    "// ": " ",
};

butt.addEventListener("click", function decode_morse() {
    var conv = inp.value;
    conv = conv.split("");
    for (var i = 0; i < conv.length; i++) {
      conv[i] = alphabet[conv[i]];
    }
    conv = conv.join(" ");
    console.log(conv);
    out.innerHTML = conv;
  });



         
    
    
    
    
   
