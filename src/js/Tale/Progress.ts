import User from "./User";

export default class Progress {
  private _stories: User['stories'];
  private _progress: HTMLCollection;
  // private _viewerCloseEl: HTMLElement;
  // private _blockerEl: HTMLElement;
  // private _user: any;
  // private _viewerContentEl: HTMLElement;
  // private _viewerPreviousEl: HTMLElement;
  // private _viewerNextEl: HTMLElement;
  // private _currentSlide: number;

  constructor(stories: User['stories']) {
    this._stories = stories;
    this._progress = document.getElementsByClassName('viewer__progress') as HTMLCollection;
  }

  public addProgress() {
    let bar = document.getElementById('viewer__progressbar') as HTMLDivElement;

    for (let i = 0; i < this._stories.length; i++) {
      let progress = document.createElement('div');
      progress.className = 'viewer__progress';
      bar.appendChild(progress);
    }
  }

  public setProgressStatus(storyId: number, status: string) {
    if (this._progress[storyId]) {
      let filled = this._progress[storyId].children[0];

      switch (status) {
        case 'completed':
          filled.classList.remove('viewer__progress--filled');
          filled.classList.add('viewer__progress--completed');
          break;

        case 'loading':
          filled.classList.remove('viewer__progress--filled');
          filled.classList.remove('viewer__progress--completed');
          break;
      }
    }
  }

  public fillProgress(storyId: number) {
    if (this._progress[storyId]) {
      let filled = this._progress[storyId].children[0];

      if (filled) {
        filled.classList.add('viewer__progress--filled');
      } else {
        let progressFilled: HTMLDivElement = document.createElement('div');
        progressFilled.className = 'viewer__progress--filled';

        this._progress[storyId].appendChild(progressFilled);
      }
    }
  }
}