import User from "./User";
import Progress from "./Progress";

export default class Viewer {
  private _viewerEl: HTMLElement;
  private _viewerCloseEl: HTMLElement;
  private _blockerEl: HTMLElement;
  private _user: any;
  private _viewerContentEl: HTMLElement;
  private _viewerPreviousEl: HTMLElement;
  private _viewerNextEl: HTMLElement;
  private _currentSlide: number;
  private _progress: Progress | null;
  public stories: User[];

  constructor() {
    this._viewerEl = document.getElementById('viewer') as HTMLElement;
    this._viewerContentEl = document.getElementById('viewer__content') as HTMLElement;
    this._viewerCloseEl = document.getElementById('viewer__close') as HTMLElement;
    this._viewerPreviousEl = document.getElementById('viewer__previous') as HTMLElement;
    this._viewerNextEl = document.getElementById('viewer__next') as HTMLElement;
    this._blockerEl = document.getElementById('blocker') as HTMLElement;
    this._currentSlide = 0;
    this._progress = null;

    this.stories = [];

    if (this._viewerEl)
      this._createMouseEvents();
  }

  public openViewer(user: User) {
    if (user.stories) {
      this._setViewerVisible();
      this._setMetaData(user);

      this._setStory(0, user.stories);
      this._setProgress(user.stories);
    }
  }

  private _setProgress(stories: User['stories']) {
    this._progress = new Progress(stories);
    this._progress.addProgress();
    this._progress.fillProgress(this._currentSlide);
  }

  private _setStory(number: number, story: User['stories']) {
    this._viewerContentEl.innerHTML = '';

    let image = document.createElement('IMG') as HTMLImageElement;
    image.src = story[number].url;

    let self = this;

    image.onload = function () {
      self._viewerContentEl.appendChild(image);
    }

    image.onerror = function () {
      self._viewerContentEl.innerText = 'This image is not available.';
    }

    this._setCurrentSlide(number);
  }

  private _setCurrentSlide(storyId: number) {
    this._currentSlide = storyId;
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

    if (this._progress != null) {
      this._progress.setProgressStatus(this._currentSlide + 1, 'loading');

      // Current slide
      this._progress.setProgressStatus(this._currentSlide, 'loading');
      this._progress.fillProgress(this._currentSlide);
    }
  }

  private _nextStory() {
    if ((this._currentSlide + 1) == this._user.stories.length)
      return;

    this._setStory(this._currentSlide + 1, this._user.stories);

    if (this._progress != null) {
      this._progress.setProgressStatus(this._currentSlide - 1, 'completed');
      this._progress.fillProgress(this._currentSlide);
    }
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