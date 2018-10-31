// @flow
import React, { PureComponent } from 'react';
import TextInput from '../TextInput';
import pen from '../../assets/images/pen@2x.png';
import bin from '../../assets/images/bin@2x.png';
import { scoreRange } from '../../constant';
import './idea-item.scss';

type Props = {
  editMode?: boolean,
  idea?: Object,
  className?: string,
  saveIdea?: Function,
  header?: boolean,
};

type State = {
  editMode: boolean,
  idea: Object,
  hasChanges: boolean,
};
class IdeaItem extends PureComponent<Props, State> {
  static defaultProps = {
    className: '',
    header: false,
    editMode: false,
    idea: {},
    saveIdea: () => {},
  };

  static Select(props: Object) {
    const { handleChange, name, value } = props;
    return (
      <select
        className="idea-item__select"
        onChange={handleChange}
        name={name}
        defaultValue={value}
      >
        {scoreRange.map(score => (
          <option key={score}>{score}</option>
        ))}
      </select>
    );
  }

  static Icon(props: Object) {
    const { src, alt, handleClick } = props;
    return (
      <div className="idea-item__icon" onClick={handleClick} role="presentation">
        <img src={src} alt={alt} />
      </div>
    );
  }

  static Confirm({ handleClick }: { handleClick: Function }) {
    return <div className="idea-item__confirm" role="presentation" onClick={handleClick} />;
  }

  static Cancel({ handleClick }: { handleClick: Function }) {
    return <div className="idea-item__cancel" role="presentation" onClick={handleClick} />;
  }

  static Header() {
    return (
      <div className="idea-item__header">
        <div className="idea-item__header-items">
          <p>impact</p>
          <p>ease</p>
          <p>confidence</p>
          <p>Avg.</p>
        </div>
      </div>
    );
  }

  state = {
    editMode: this.props.editMode || false,
    idea: this.props.idea || {},
    hasChanges: false,
  };

  handleIdeaChange = (name: string, value: string | number) => {
    this.setState(({ idea }) => ({ idea: { ...idea, [name]: value }, hasChanges: true }));
  };

  handleIdeaScoreChange = (event: SyntheticInputEvent<>) => {
    const { name, value } = event.target;
    this.handleIdeaChange(name, Number(value));
  };

  toggleEditMode = () => {
    const { editMode } = this.state;
    this.setState({ editMode: !editMode, hasChanges: false });
  };

  handleCancelClick = () => {
    this.toggleEditMode();
    this.setState({ idea: this.props.idea });
  };

  handleConfirmClick = () => {
    const { idea, hasChanges } = this.state;
    const { saveIdea } = this.props;
    if (idea.content.trim() === '') return;
    this.toggleEditMode();
    if (hasChanges && saveIdea) {
      saveIdea(idea);
    }
  };

  renderEditMode() {
    const {
      impact, ease, confidence, content,
    } = this.state.idea;
    return (
      <div className="idea-item__edit-mode">
        <TextInput
          name="content"
          className="idea-item__input "
          handleChange={this.handleIdeaChange}
          value={content}
        />
        <IdeaItem.Select handleChange={this.handleIdeaScoreChange} name="impact" value={impact} />
        <IdeaItem.Select handleChange={this.handleIdeaScoreChange} name="ease" value={ease} />
        <IdeaItem.Select
          handleChange={this.handleIdeaScoreChange}
          name="confidence"
          value={confidence}
        />
        <p className="idea-item__score">5</p>
        <IdeaItem.Confirm handleClick={this.handleConfirmClick} />
        <IdeaItem.Cancel handleClick={this.handleCancelClick} />
      </div>
    );
  }

  renderViewMode() {
    const {
      impact, ease, confidence, content,
    } = this.state.idea;
    return (
      <div className="idea-item__edit-mode">
        <p className="idea-item__idea">{content}</p>
        <p className="idea-item__score">{impact}</p>
        <p className="idea-item__score">{ease}</p>
        <p className="idea-item__score">{confidence}</p>
        <p className="idea-item__score">5</p>
        <IdeaItem.Icon src={bin} alt="delete icon" />
        <IdeaItem.Icon src={pen} alt="edit icon" handleClick={this.toggleEditMode} />
      </div>
    );
  }

  render() {
    const { className = '', header } = this.props;
    const { editMode } = this.state;

    if (header) {
      return <IdeaItem.Header />;
    }

    return (
      <div className={`idea-item ${className}`}>
        {editMode ? this.renderEditMode() : this.renderViewMode()}
      </div>
    );
  }
}

export default IdeaItem;
