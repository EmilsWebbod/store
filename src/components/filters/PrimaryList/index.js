import Primary from "../Primary/index";
import {connect} from "react-redux";
import {getSecondaries} from "../../../redux/reducers/api/api.store";
import {bindActionCreators} from "redux";
import {Li, Ul} from "../../global/list/";

const React = require('react');

const isActive = (active, primary) => {
  return active && primary && active.id === primary.id;
};

const PrimaryList = ({primaries, active, handlePrimaryClick}) => (
  <Ul flex>
    {primaries.map(primary => (
      <Li key={primary.id} >
        <Primary {...primary} active={isActive(active, primary)} onClick={handlePrimaryClick}/>
      </Li>
    ))}
  </Ul>
);

const mapStateToProps = (state) => {
  return {
    primaries: state.filters.primaries,
    active: state.filters.active.primary
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handlePrimaryClick: id => bindActionCreators(getSecondaries(id), dispatch)
  }
};

export {PrimaryList, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(PrimaryList)
