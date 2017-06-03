# Gaze
yet another alternative to read color coded lego bricks

![The Conjurer](https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hieronymus_Bosch_051.jpg/924px-Hieronymus_Bosch_051.jpg)

*The Conjurer* by Hieronymus Bosch, image taken from [wikipedia](https://en.wikipedia.org/wiki/The_Conjurer_(painting))


## memo on which framework to use

The [Webassembly](http://webassembly.org/) movement seems to be promising, backed up by Google, Mozilla, Apple and Microsoft, and all four major browsers have more or less [agreed on implementing this feature](https://lists.w3.org/Archives/Public/public-webassembly/2017Feb/0002.html). Web Assembly(wsam) is a way to write type strict languages such as c/c++ and compile to a binary format that can directly talk to the javascript engine, skipping the optimization process that a normal javascript would undergo in runtime. Unity and Unreal game engines are looking to this path for their browser outputs.

Openframeworks has already have a way to convert c/c++ code to browser runnable optimized js code which uses asm.js, the predecessor of wasm. Hoping the OF community will eventually shift to wasm (which is a natural), I think the way to go is to start developing it using OF, which has the following advantages

- Optimized and fast javascript

- standalone software C/C++ as backup (performant)

Yet I see risk (and potential) when we ever want to use external libraries in c++, we need to check if that has compatibility to convert it to asm.js/wasm. A potential means if the conversion works out, we may be able to leaverage libraries written in c++.
