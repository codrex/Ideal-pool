// @flow
import React, { PureComponent } from 'react';
import Button from '../Button';
import IdeaItem from '../IdeaItem';
import Avatar from '../Avatar';
import { defaultIdea } from '../../constant';
import bulb from '../../assets/images/bulb.png';
import './ideas.scss';

type State = {
  hasUnsavedIdea: boolean,
  unsavedIdea: Object,
};

type Props = {
  actions: Object,
  ideas: Object[],
};
class Ideas extends PureComponent<Props, State> {
  static Header(props: Object) {
    const { handleAddButtonClick } = props;
    return (
      <div className="ideas__header">
        <h2 className="ideas__header-text">my ideas</h2>
        <Button fab handleClick={handleAddButtonClick} />
      </div>
    );
  }

  static List(props: Object) {
    const { saveIdea, removeUnSavedIdea } = props;
    return (
      <div className="ideas__list">
        <IdeaItem className="ideas__list-item" header />
        {props.ideas.map(idea => (
          <IdeaItem
            className="ideas__list-item"
            idea={idea}
            key={idea.id}
            editMode={idea.editMode || false}
            saveIdea={saveIdea}
            removeUnSavedIdea={removeUnSavedIdea}
          />
        ))}
      </div>
    );
  }

  static IdeaBulb() {
    return (
      <Avatar text="got ideas?" className="ideas__bulb">
        <img src={bulb} alt="idea bulb" />
      </Avatar>
    );
  }

  state = {
    hasUnsavedIdea: false,
    unsavedIdea: {},
  };

  addIdeaButtonClicked = () => {
    const { hasUnsavedIdea } = this.state;
    if (hasUnsavedIdea) return;
    this.setState({
      unsavedIdea: {
        ...defaultIdea,
        editMode: true,
      },
      hasUnsavedIdea: true,
    });
  };

  removeUnSavedIdea = () => {
    this.setState({ hasUnsavedIdea: false, unsavedIdea: {} });
  };

  saveIdea = (idea: Object) => {
    const { createIdea, updateIdea } = this.props.actions;
    this.removeUnSavedIdea();
    if (idea.id) {
      updateIdea(idea);
    } else createIdea(idea);
  };

  render() {
    const { unsavedIdea, hasUnsavedIdea } = this.state;
    let ideasToRender = this.props.ideas;
    if (hasUnsavedIdea) {
      ideasToRender = [unsavedIdea].concat(ideasToRender);
    }
    const showIdeas = ideasToRender.length > 0;
    return (
      <div className="ideas">
        <Ideas.Header handleAddButtonClick={this.addIdeaButtonClicked} />
        {showIdeas && (
          <Ideas.List
            ideas={ideasToRender}
            saveIdea={this.saveIdea}
            removeUnSavedIdea={this.removeUnSavedIdea}
          />
        )}
        {!showIdeas && <Ideas.IdeaBulb />}
      </div>
    );
  }
}

export default Ideas;
