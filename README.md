# Challenge Técnico.

------------------------------------------------

##Instrucciones para la ejecución de los testes.

1 - Asegurarse de contar con Git instalado, caso contrario se puede descargar desde el siguiente enlace:
https://github.com/git-for-windows/git/releases/download/v2.51.0.windows.1/Git-2.51.0-64-bit.exe

2 - Clonar el repositorio:

Desde una consola de Git Bash ejecutar el siguiente comando:

git clone https://github.com/andreavanessa1985/Challenge.git

3 - Instalar dependencias:

Asegurarse de contar con Node.Js instalado en el sistema, caso contrario se puede descargar desde el siguiente enlace:
https://nodejs.org/en/download

Desde una terminal CMD ejecutar el siguiente comando:

npm install

Una vez finalizada la instalación moverse al directorio raiz del challenge para evitar cualquier inconveniente en la ejecución de los mismos:

cd C:\TuPath

Por ultimo abrimos Cypress en modo interactivo con el comando:

npx cypress open

4 - Ejecutar pruebas:

Desde el modo interactivo de Cypress elegimos E2E como testing type y cualquier navegador que querramos, eso nos va a rederigir a las pruebas automatizadas del repositorio para poder ejecutarlas.

------------------------------------------------

Descripción de los tests implementados:

crear_usuario.cy.js: Automatiza el flujo de creación de un usuario asignando un nombre de usuario, contraseña e email de forma aleatoria para corroborar que el flujo funcione correctamente.

login_usuario.cy.js: Automatiza el proceso de logueo a la plataforma con un usuario pre-establecido para verificar el correcto funcionamiento.

echo_server.cy.js: Valida que los codigos de estados sean los correctos y que el tiempo de respuesta sea el esperado, caso contrario prosigue con el test pero genera un log en la consola informando el error. Tambien valida la estructura, encabezados y funcionalidad de los endpoints.
