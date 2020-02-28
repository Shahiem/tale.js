import Viewer from "./Viewer";
import User from "./User";

export default class Story {
  public viewer: Viewer;
  private _storiesEl: HTMLElement;

  constructor() {
    this.viewer = new Viewer();

    this._storiesEl = document.getElementById('stories') as HTMLElement;
  }

  public addStory(user: User) {
    if (this._storiesEl) {
      let story = this._createStory(user);

      this._appendToStories(story);
      this._createMouseEvents(story, user);
    }
  }

  private _createStory(user: User): HTMLElement {
    // Story
    let story: HTMLDivElement = document.createElement('div');
    story.className = 'story story--seen';

    // Avatar container
    let avatarContainer: HTMLDivElement = document.createElement('div');
    avatarContainer.className = 'story__avatar';

    story.appendChild(avatarContainer);

    // Avatar
    let avatar: HTMLElement = document.createElement('IMG');
    avatar.className = 'photo';
    avatar.setAttribute('src', user.photo);

    avatarContainer.appendChild(avatar);

    // Username
    let username: HTMLSpanElement = document.createElement('span');
    username.className = 'story__username';
    username.innerHTML = user.name;

    story.appendChild(username);

    return story;
  }

  private _appendToStories(story: HTMLElement) {
    this._storiesEl.appendChild(story);
  }

  private _createMouseEvents(story: HTMLElement, user: User) {
    story.addEventListener('click', this.viewer.openViewer.bind(this.viewer, user));
  }

}