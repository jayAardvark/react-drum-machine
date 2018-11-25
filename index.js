var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));_this.

















    handleKeyPress = function (event) {
      var audio = document.getElementById(event.key.toUpperCase());
      console.log(audio);
      if (audio) {
        audio.play();
        audio.currentTime = 0;

        var parentElement = document.getElementById(event.key.toUpperCase()).
        parentElement.id;
        console.log(parentElement);
        _this.setState({ display: parentElement });
      }
    };_this.

    handleClick = function (event) {
      _this.setState({ display: event.target.id });
      var audioId = event.target.innerText;
      var audio = _this.refs[audioId];
      audio.play();
      audio.currentTime = 0; //improves response of key
      console.log(audioId);
    };_this.state = { display: "click a key!" }; //this.handleClick = this.handleClick.bind(this); //why isn't this section necessary? answer: arrow function was used!
    //this.handleKeyPress = this.handleKeyPress.bind(this);
    return _this;}_createClass(DrumMachine, [{ key: "componentDidMount", value: function componentDidMount() {document.addEventListener("keydown", this.handleKeyPress);window.focus(); //allows immediate use of keyboard
    } }, { key: "componentWillUnmount", value: function componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyPress);} }, { key: "render", value: function render() {return React.createElement("div", { id: "drum-machine" },
        React.createElement("div", { id: "display" },
          React.createElement("h5", { id: "show-display" }, this.state.display),
          React.createElement("div", { id: "keyLayout" },
            React.createElement("button", {
                className: "btn btn-outline-primary drum-pad row-1",
                id: "piano 1",
                letter: "Q",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
                id: "Q",
                ref: "Q" }), "Q"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad row-1",
                id: "piano 2",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
                id: "W",
                ref: "W" }), "W"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad row-1",
                id: "piano 3",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
                id: "E",
                ref: "E" }), "E"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad",
                id: "percussion",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
                id: "A",
                ref: "A" }), "A"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad",
                id: "open hi-hat",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
                id: "S",
                ref: "S" }), "S"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad",
                id: "closed hi-hat",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
                id: "D",
                ref: "D" }), "D"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad",
                id: "bass drum",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
                id: "Z",
                ref: "Z" }), "Z"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad",
                id: "snare drum 1",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
                id: "X",
                ref: "X" }), "X"),



            React.createElement("button", {
                type: "button",
                className: "btn btn-outline-primary drum-pad",
                id: "snare drum 2",
                onClick: this.handleClick },

              React.createElement("audio", {
                className: "clip",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
                id: "C",
                ref: "C" }), "C"))));







    } }]);return DrumMachine;}(React.Component);

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("target-render"));
