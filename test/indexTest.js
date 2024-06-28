require('./helpers.js');
const sinon = require('sinon');
const { expect } = require('chai');

// Define the addingEventListener function here or import it if it's in a separate file.
function addingEventListener() {
  const input = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

describe("index.js", () => {
  let input;

  beforeEach(function() {
    // Simulate the document structure from index.html
    document.body.innerHTML = `
      <main id="main">My ID is "main"!</main>
      <br />
      <div>
        <input id="button" type="button" value="Click Me!"/>
      </div>
      <br />
      <div>
        1
        <div>
          2
          <div>
            3
            <div>
              4
              <div>
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  });

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  });
});
