import { connect } from 'react-redux';
import AddCard from './add_card';

const mapStateToProps = state => ({
  deckId: state.deckShow.id
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
