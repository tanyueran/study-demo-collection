function ajax(url, ok) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        ok(JSON.parse(xhr.responseText));
      }
    }
  }
  xhr.open('post', url);
  xhr.send(null);
}