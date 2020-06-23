//  Soal 1
// Component pada dasarnya adalah sebuah elemen yang kita dapat pecah-pecah menjadi bagian yang lebih kecil
// component memiliki sifat reusable sehingga dapat digunakan pada komponen lain dan membuat kita tidak perlu
// membuat ulang atau mendeclare sesuatu/komponen yang sudah kita pernah buat sebelumnya

// Props pada dasarnya adalah sebuah variable atau sesuatu yang mempunyai nilai yang dapat kita "lempar" dari satu komponen ke komponen lain, props bersifat immutable sehingga
//  berguna jika kita ingin menampilkan nilai yang tetap (fixed value)

// Soal 2
// yang dimaksud props read-only adalah props nilainya tidak dapat diubah, pada darasrnya react mempunyai strict rule
// dimana semua komponen pada react mesti berperilaku seperti pure function (tidak mengubah secara langsung propnya)

// Soal 3 compose component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome name="React!" />
    </div>
  );
}

// Soal 4 extracting component
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

// Soal 5
function Comment(props) {
  return (
    <React.Fragment>
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </React.Fragment>
  );
}

// Dalam satu komponen hanya boleh ada satu "pembungkus", hal ini bisa disiasati dengan menambahkan/membungkusnya
// dengan tag React.Fragment atau dengan tag kosong(<></>)
