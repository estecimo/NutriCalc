# Requisitos Funcionales (RF)
Los Requisitos Funcionales (RF) definen las capacidades específicas que el sistema NutriCalc debe proporcionar para cumplir con los objetivos del proyecto. A continuación se listan los RF junto con una breve descripción funcional, y en algunos casos, se incluyen historias de usuario para contextualizar su uso.

### RF01 – Registro de usuarios
El sistema debe permitir a los nuevos usuarios registrarse con credenciales únicas (correo electrónico y contraseña).  
**Historia de usuario:**  
**Como** nuevo usuario, **quiero** crear una cuenta con mis datos básicos, **para que** pueda acceder a mis planes personalizados.

### RF02 – Inicio de sesión
El sistema debe permitir el inicio de sesión con credenciales válidas.  
**Historia de usuario:**  
**Como** usuario registrado, **quiero** iniciar sesión con mis credenciales, **para que** pueda acceder a mi información guardada.

### RF03 – Cálculo de macronutrientes
El sistema debe calcular automáticamente la distribución de macronutrientes (carbohidratos, proteínas, grasas) a partir del total de kilocalorías estimado.  
**Historia de usuario:**  
Como usuario, quiero conocer mis requerimientos de macronutrientes para planificar mi dieta de forma balanceada.

### RF04 - Visualización de macronutrientes
El sistema debe reflejar los macronutrientres calculados en la distribución de los alimentos a seleccionar.
**Como** usuario, **quiero** visualizar la distribución de macronutrientes (proteínas, carbohidratos, grasas), **para que** comprenda cómo se compone mi dieta.

### RF05 – Asignación de equivalentes de grupos alimenticios
El sistema debe permitir seleccionar alimentos según los grupos alimenticios equivalentes definidos en el sistema (ej. cereales, proteínas, frutas, etc.).  
**Historia de usuario:**  
Como usuario, quiero seleccionar equivalentes alimenticios para personalizar mis tiempos de comida.

### RF06 – Creación y edición de menús
El sistema debe permitir crear, editar, visualizar y organizar menús personalizados según los tiempos de comida definidos (desayuno, colación, comida, etc.).  
**Historia de usuario:**  
Como nutriólogo, quiero crear y editar planes alimenticios para adaptarlos a las necesidades de mis pacientes.

### RF07 – Guardar menús
El sistema debe permitir guardar menús personalizados en la cuenta del usuario.  
**Historia de usuario:**  
Como usuario, quiero guardar mis menús para reutilizarlos o consultarlos más tarde.

### RF08 - Historial de planes
**Como** usuario, **quiero** acceder al historial de mis planes anteriores, **para que** pueda evaluar mi progreso con el tiempo.

### RF09 – Exportar menús
El sistema debe permitir exportar los menús generados en formato PDF y/o CSV.  
**Historia de usuario:**  
Como usuario, quiero exportar mis menús para imprimirlos o compartirlos con otras personas.

### RF10 – Cierre de sesión
El sistema debe permitir cerrar la sesión de forma segura.  
**Historia de usuario:**  
Como usuario, quiero cerrar mi sesión para proteger mi información personal.
