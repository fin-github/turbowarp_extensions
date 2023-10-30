class HelloWorld {
    getInfo() {
      return {
        id: 'helloworld',
        name: 'It works!',
        color1: 'ff0000', // brightest
        color2: '00ff00', // middle
        color3: '0000ff', // darkest
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Hello!'
          }
        ]
      };
    }
  
    hello() {
      return 'World!';
    }
  }
  
  Scratch.extensions.register(new HelloWorld());
