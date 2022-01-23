import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

const requireAuth = (ChildComponent, pushAwayTo) => {
  // class ComposedComponent extends Component {
  //     componentDidMount() {
  //         if (!this.props.token) {
  //             this.props.history.push("/login")
  //         }
  //         this.navigateAway()
  //     }

  //     componentDidUpdate() {
  //         if (!this.props.token) {
  //             this.props.history.push("/login")
  //         }
  //         this.navigateAway()
  //     }

  //     navigateAway() {
  //         if (!this.props.token) {
  //             this.props.history.push(pushAwayTo);
  //         }
  //     }

  //     render() {
  //         return (
  //             <ChildComponent {...this.props}/>
  //         )
  //     }
  // }

  // const mapStateToMaps = (state) => {
  //     return {
  //         token: state.user.token,
  //         loading: state.user.token
  //     }
  // };
  // return connect(mapStateToMaps)(ComposedComponent);
  const ComposedComponent = ({ token }) => {
      const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        navigate("/login")
      }
      navigateAway();
    });
    const navigateAway = () => {
      if (!token) {
        navigate(pushAwayTo);
      }
    };
    return <ChildComponent />;
  };

  const mapStateToMaps = (state) => {
    return {
      token: state.user.token,
    };
  };
  return connect(mapStateToMaps)(ComposedComponent);
};

export default requireAuth;
