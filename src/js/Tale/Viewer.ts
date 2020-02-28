import User from "./User";

export default class Viewer {
  private _viewerEl: HTMLElement;
  private _viewerCloseEl: HTMLElement;
  private _blockerEl: HTMLElement;
  private _user: any;
  private _viewerContentEl: HTMLElement;
  private _viewerPreviousEl: HTMLElement;
  private _viewerNextEl: HTMLElement;
  private _currentSlide: number;

  constructor() {
    this._viewerEl = document.getElementById('viewer') as HTMLElement;
    this._viewerContentEl = document.getElementById('viewer__content') as HTMLElement;
    this._viewerCloseEl = document.getElementById('viewer__close') as HTMLElement;
    this._viewerPreviousEl = document.getElementById('viewer__previous') as HTMLElement;
    this._viewerNextEl = document.getElementById('viewer__next') as HTMLElement;
    this._blockerEl = document.getElementById('blocker') as HTMLElement;
    this._currentSlide = 0;

    if (this._viewerEl)
      this._createMouseEvents();
  }

  public openViewer(user: User) {
    this._setViewerVisible();
    this._setMetaData(user);
    this._addProgressBars();

    if (user.stories && user.stories[0]) {
      this._setStory(0, user.stories);
    }
  }

  private _setStory(number: number, story: User['stories']) {
    const self = this;
    const storyData = story[number];

    self._viewerContentEl.innerHTML = '';

    switch (storyData.type) {
      case 'image':
        let image = document.createElement('IMG') as HTMLImageElement;
        image.src = storyData.url;

        image.onload = function () {
          self._viewerContentEl.appendChild(image);
        }

        image.onerror = function (error) {
          self._viewerContentEl.innerText = 'This image is not available.';
        }
        break;
    }

    this._setCurrentSlide(number);
    this._fillProgress(number);
  }

  private _setCurrentSlide(storyId: number) {
    this._currentSlide = storyId;
  }

  private _fillProgress(storyId: number) {
    let progress = document.getElementsByClassName('viewer__progress') as HTMLCollection;

    if (progress[storyId]) {
      let progressFilled: HTMLDivElement = document.createElement('div');
      progressFilled.className = 'viewer__progress--filled';

      progress[storyId].appendChild(progressFilled);
    }
  }

  private _addProgressBars() {
    if (!this._user)
      return '';

    let bar = document.getElementById('viewer__progressbar') as HTMLDivElement;

    for (let i = 0; i < this._user.stories.length; i++) {
      let progress = document.createElement('div');
      progress.className = 'viewer__progress';

      bar.appendChild(progress);
    }
  }

  private _setMetaData(user: User) {
    let name = document.getElementById('viewer__name') as HTMLDivElement;
    name.innerText = user.name;

    this._user = user;
  }

  private _prevStory() {
    if (this._currentSlide == 0)
      return;

    this._setStory(this._currentSlide - 1, this._user.stories);
  }

  private _nextStory() {
    if ((this._currentSlide + 1) == this._user.stories.length)
      return;

    this._setStory(this._currentSlide + 1, this._user.stories);
  }

  private _createMouseEvents() {
    this._viewerCloseEl.addEventListener('click', this._closeViewer.bind(this));
    this._blockerEl.addEventListener('click', this._closeViewer.bind(this));
    this._viewerPreviousEl.addEventListener('click', this._prevStory.bind(this));
    this._viewerNextEl.addEventListener('click', this._nextStory.bind(this));
  }

  private _resetViewer() {
    // Reset progress bars
    let bar = document.getElementById('viewer__progressbar') as HTMLDivElement;
    bar.innerHTML = '';

    // Remove content
    this._viewerContentEl.innerHTML = '';
  }

  private _setViewerVisible() {
    this._viewerEl.classList.remove('viewer--hidden');
    this._viewerEl.classList.add('viewer--visible');

    this._blockerEl.classList.remove('blocker--hidden');
    this._blockerEl.classList.add('blocker--visible');
  }

  private _setViewerHidden() {
    this._viewerEl.classList.add('viewer--hidden');
    this._viewerEl.classList.remove('viewer--visible');

    //Todo set timeout for animations
    this._blockerEl.classList.add('blocker--hidden');
    this._blockerEl.classList.remove('blocker--visible');
  }

  private _closeViewer() {
    this._setViewerHidden();
    this._resetViewer();
  }
}