import WebMidi from 'webmidi';

console.log('loaded midhandler');

class MidiHandler {
  constructor() {
    WebMidi.enable((err) => {
      const inputs = WebMidi.inputs;
      if (inputs.length === 0) {
        return;
      }

      const input = inputs[0];

      input.addListener('noteon', 'all', (e) => {
          console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
          if (this._onNote) {
            this._onNote(e);
          }
      });

      input.addListener('controlchange', 'all', (e) => {
        console.log(e)
        if (e.controller.name === 'holdpedal') {
          if (this._onHoldPedal) {
            this._onHoldPedal(e);
          }
        }
        if (e.controller.name === 'expressioncoarse') {
         if (this._onExpressionPedal) {
            this._onExpressionPedal(e);
          } 
        }
      });
    });
  }

  onNote(fn) {
    this._onNote = fn;
  }

  onHoldPedal(fn) {
    this._onHoldPedal = fn;
  }

  onExpressionPedal(fn) {
    this._onExpressionPedal = fn;
  }
}




const midiHandler = new MidiHandler(); 

export default midiHandler;