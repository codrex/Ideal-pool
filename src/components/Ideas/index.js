// @flow
import React, { PureComponent } from 'react';
import Button from '../Button';
import IdeaItem from '../IdeaItem';
import { ideas } from '../../constant/mock';
import { defaultIdea } from '../../constant';
import './ideas.scss';

type State = {
  hasUnsavedIdea: boolean,
  unsavedIdea: Object,
};
class Ideas extends PureComponent<{}, State> {
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
    return (
      <div className="ideas__list">
        <IdeaItem className="ideas__list-item" header />
        {props.ideas.map(idea => (
          <IdeaItem
            className="ideas__list-item"
            idea={idea}
            key={idea.id}
            editMode
            saveIdea={props.saveIdea}
          />
        ))}
      </div>
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

  saveIdea = (idea: Object) => {
    console.log(idea);
    this.setState({ hasUnsavedIdea: false, unsavedIdea: {} });
  };

  render() {
    const { unsavedIdea, hasUnsavedIdea } = this.state;
    let ideasToRender = ideas;
    if (hasUnsavedIdea) {
      ideasToRender = [unsavedIdea].concat(ideasToRender);
    }
    console.log(ideasToRender);
    return (
      <div className="ideas">
        <Ideas.Header handleAddButtonClick={this.addIdeaButtonClicked} />
        <Ideas.List ideas={ideasToRender} saveIdea={this.saveIdea} />
      </div>
    );
  }
}

export default Ideas;
