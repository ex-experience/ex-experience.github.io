rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() { return request.auth != null; }
    function isOwner(data) { return signedIn() && data.OwnerUid == request.auth.uid; }
    function isAdmin() {
      return signedIn() &&
        exists(/databases/$(database)/documents/Admins/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/Admins/$(request.auth.uid)).data.Active == true;
    }
    function shortText(v,n) { return v is string && v.size() > 0 && v.size() <= n; }
    function email(v) { return v is string && v.size() <= 160 && v.matches('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'); }

    match /Gate_Registrations/{id} {
      allow create: if shortText(request.resource.data.Name,100)
        && email(request.resource.data.Email)
        && shortText(request.resource.data.Phone,32);
      allow read, update, delete: if isAdmin();
    }
    match /Users/{uid} {
      allow create, read, update: if signedIn() && request.auth.uid == uid;
      allow delete: if isAdmin();
    }
    match /Community_Family/{id} {
      allow create: if signedIn() && request.resource.data.OwnerUid == request.auth.uid
        && shortText(request.resource.data.Name,100) && email(request.resource.data.Email);
      allow read: if isOwner(resource.data) || isAdmin();
      allow update, delete: if isAdmin();
    }
    match /Experience_Ratings/{id} {
      allow create: if signedIn() && request.resource.data.OwnerUid == request.auth.uid
        && request.resource.data.Rating is number && request.resource.data.Rating >= 1 && request.resource.data.Rating <= 5;
      allow read: if isOwner(resource.data) || isAdmin();
      allow update, delete: if isAdmin();
    }
    match /Consultations/{id} {
      allow create: if signedIn() && request.resource.data.OwnerUid == request.auth.uid;
      allow read: if isOwner(resource.data) || isAdmin();
      allow update, delete: if isAdmin();
    }
    match /CreativeIntakes/{id} {
      allow create: if signedIn() && request.resource.data.OwnerUid == request.auth.uid;
      allow read: if isOwner(resource.data) || isAdmin();
      allow update, delete: if isAdmin();
    }
    match /ClientProjects/{id} {
      allow read: if isOwner(resource.data) || isAdmin();
      allow create, update, delete: if isAdmin();
    }
    match /MatrixLogs/{id} {
      allow create: if signedIn() && request.resource.data.OwnerUid == request.auth.uid;
      allow read: if isOwner(resource.data) || isAdmin();
      allow update, delete: if false;
    }
    match /SecurityLogs/{id} {
      allow create: if signedIn() && request.resource.data.OwnerUid == request.auth.uid;
      allow read, update, delete: if isAdmin();
    }
    match /visitors/{id} {
      allow create, update: if signedIn();
      allow read: if isAdmin();
      allow delete: if false;
    }
    match /Admins/{uid} {
      allow read: if signedIn() && (request.auth.uid == uid || isAdmin());
      allow write: if isAdmin();
    }
    match /{document=**} { allow read, write: if false; }
  }
}
