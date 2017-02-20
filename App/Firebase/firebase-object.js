import { firebaseDb } from './firebase';

export class FirebaseObject {
  constructor(actions) {
    this._actions = actions;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  set(value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(this.path)
        .set(value, error => error ? reject(error) : resolve());
    });
  }

  remove(key) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .remove(error => error ? reject(error) : resolve());
    });
  }

  update(key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .update(value, error => error ? reject(error) : resolve());
    });
  }

  exists() {
    return new Promise((resolve) => {
      const ref = firebaseDb.ref(this.path);
      ref.once('value', (snapshot) => {
        resolve(snapshot.exists());
      });
    });
  }

  subscribe(emit) {
    const ref = firebaseDb.ref(this.path);
    let initialized = false;

    ref.once('value', (snapshot) => {
      initialized = true;
      emit(this._actions.onLoad(snapshot.val()));
    });

    ref.on('child_added', (snapshot) => {
      if (initialized) {
        emit(this._actions.onAdd(this.constructor.unwrapSnapshot(snapshot)));
      }
    });

    ref.on('child_changed', (snapshot) => {
      emit(this._actions.onChange(this.constructor.unwrapSnapshot(snapshot)));
    });

    ref.on('child_removed', (snapshot) => {
      emit(this._actions.onRemove(this.constructor.unwrapSnapshot(snapshot)));
    });

    return () => ref.off();
  }

  static unwrapSnapshot(snapshot) {
    const attr = snapshot.val();
    const diff = {};
    diff[snapshot.key] = attr;
    return diff;
  }
}
