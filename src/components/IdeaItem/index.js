// @flow
import React, { PureComponent } from 'react';
import TextInput from '../TextInput';
import pen from '../../assets/images/pen@2x.png';
import bin from '../../assets/images/bin@2x.png';
import './idea-item.scss';

type Props = {
  editMode: boolean,
};
const scoreRange: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class IdeaIItem extends PureComponent<Props> {
  static Select() {
    return (
      <select className="idea-item__select">
        {scoreRange.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }

  static Icon(props: Object) {
    const { src, alt } = props;
    return (
      <div className="idea-item__icon">
        <img src={src} alt={alt} />
      </div>
    );
  }

  static EditMode() {
    return (
      <div className="idea-item__edit-mode">
        <TextInput name="idea" className="idea-item__input " />
        <IdeaIItem.Select />
        <IdeaIItem.Select />
        <IdeaIItem.Select />
        <p className="idea-item__score">5</p>
        <IdeaIItem.Confirm />
        <IdeaIItem.Cancel />
      </div>
    );
  }

  static ViewMode() {
    return (
      <div className="idea-item__edit-mode">
        <p className="idea-item__idea">idea className</p>
        <p className="idea-item__score">5</p>
        <p className="idea-item__score">5</p>
        <p className="idea-item__score">5</p>
        <p className="idea-item__score">5</p>
        <IdeaIItem.Icon src={bin} alt="delete icon" />
        <IdeaIItem.Icon src={pen} alt="edit icon" />
      </div>
    );
  }

  static Confirm() {
    return <div className="idea-item__confirm" role="presentation" />;
  }

  static Cancel() {
    return <div className="idea-item__cancel" role="presentation" />;
  }

  render() {
    const { editMode } = this.props;
    return (
      <div className="idea-item">{editMode ? <IdeaIItem.EditMode /> : <IdeaIItem.ViewMode />}</div>
    );
  }
}

export default IdeaIItem;
