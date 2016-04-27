/*
*   NPM Modules
*/
var React = require('react');
/*
*   Custom Components
*/
var Nav = require('Nav');


// var Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav/>
                    <p>Main.jsx rendered</p>
                    {props.children}
                </div>
            </div>
        </div>

    );
}

module.exports = Main;
