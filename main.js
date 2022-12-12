screenSize = screen.width;
const modal = document.querySelector(".modal-body");
const mobileDownload =
  '<a href="apk/app-release.apk" download="duocActive"><div class="btn btn-success w-100">Descargar APK</div></a><p class="text-center">La descarga comenzara automaticamente al dar click</p>';
const desktopDownload =
  '<img class="w-100" src="https://i.ibb.co/mHK3890/qrcode-generado.png"alt="qr duoc app"/><p class="text-center">Escanea el codigo para obtener la APK gratuita</p>';

modal.innerHTML = screenSize > 810 ? desktopDownload : mobileDownload;
console.log(screenSize);
