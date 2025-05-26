# Historias de Usuario con Criterios de Aceptación
### HU011 – Registro de usuarios
Como usuario nuevo,
quiero registrarme en la aplicación con mis credenciales personales,
para que pueda acceder a funcionalidades personalizadas y guardar mis menús.

Criterios de aceptación:
- El formulario de registro solicita correo electrónico y contraseña.
- El sistema valida que el correo no exista previamente.
- La contraseña debe cumplir con requisitos mínimos de seguridad.
- El sistema confirma el registro exitoso o muestra errores adecuados.

### HU02 - Visualización de Macronutrientes
**Como** usuario, **quiero** ver un desglose visual de mis macronutrientes, **para que** pueda balancear mi alimentación.  

**Criterios de Aceptación:**
- Se presentan gráficas tipo pie o barras.
- Se indican los porcentajes de proteínas, carbohidratos y grasas.

### HU03 – Asignación de equivalentes alimenticios
Como usuario interesado en diseñar su menú,
quiero ver y seleccionar equivalentes de grupos alimenticios,
para que pueda construir una dieta balanceada sin necesidad de conocimientos avanzados.

Criterios de aceptación:
- El sistema muestra los grupos alimenticios con ejemplos por porción.
- El usuario puede asignar porciones por grupo de alimento.
- El sistema actualiza el porcentaje de cumplimiento nutricional.

### HU04 – Creación y edición de menú
Como usuario que sigue un plan alimenticio,
quiero organizar mis alimentos por tiempos de comida,
para que pueda estructurar mi día alimenticio fácilmente.

Criterios de aceptación:
- El menú permite agregar alimentos a desayuno, colaciones, almuerzo y cena.
- El usuario puede editar o eliminar elementos del menú.
- Se visualiza un resumen calórico y nutricional por comida.

### HU05 – Exportación del menú
Como profesional de la nutrición,
quiero exportar el menú en formato PDF o CSV,
para que pueda entregarlo o revisarlo con mis pacientes fuera de línea.

Criterios de aceptación:
- La exportación genera un archivo con formato profesional.
- Se incluyen totales calóricos y distribución de macronutrientes.
- El archivo puede descargarse desde la interfaz del sistema.

# Casos de Uso del Sistema
### CU01: Registrar usuario
Actor principal: Usuario no registrado  
Precondiciones: El usuario no debe tener una cuenta previa  
Flujo principal:  
1. El usuario accede al formulario de registro.
2. Ingresa su correo y contraseña.
3. El sistema valida los datos.
4. El sistema crea una cuenta y notifica el éxito.
Excepciones:  
- Correo ya registrado → mostrar error.
- Contraseña insegura → pedir cambios.

### CU02: Iniciar sesión
Actor principal: Usuario registrado
Precondiciones: Tener una cuenta válida
Flujo principal:
1. El usuario accede a la página de inicio de sesión.
2. Introduce sus credenciales.
3. El sistema verifica los datos y concede acceso.
Excepciones:
- Credenciales inválidas → mostrar error.
- Usuario no registrado → redirigir a registro.

### CU03: Calcular macronutrientes
Actor principal: Usuario autenticado  
Precondiciones: Datos personales completos  
Flujo principal:
1. El sistema usa las kilocalorías para distribuir los macronutrientes.
2. Muestra resultados diarios en gramos y porcentaje.

### CU04: Agregar equivalentes alimenticios
Actor principal: Usuario autenticado  
Precondiciones: Macronutrientes calculados  
Flujo principal:
1. El usuario accede al sistema de equivalentes.
2. Selecciona porciones por grupo de alimentos.
3. El sistema actualiza el porcentaje de cumplimiento.

### CU05: Crear y editar menú
Actor principal: Usuario autenticado  
Precondiciones: Equivalentes definidos  
Flujo principal:
1. El usuario selecciona el tiempo de comida.
2. Agrega alimentos específicos al menú.
3. Puede editar o eliminar platillos.

### CU06: Guardar menú
Actor principal: Usuario autenticado
Precondiciones: Menú creado
Flujo principal:
1. El usuario guarda el menú con un nombre.
2. El sistema lo almacena en su cuenta.

### CU05: Ver Historial de Planes
Actor principal: Usuario autenticado
Flujo principal:
1. El usuario consulta la sección de Planes guardados
2. El usuario selecciona de un enlistado el plan que quiere consultar

### CU06: Exportar menú
Actor principal: Usuario autenticado
Precondiciones: Menú creado o cargado
Flujo principal:
1. El usuario selecciona exportar.
2. Elige el formato deseado (PDF o CSV).
3. El sistema genera y descarga el archivo.

### CU07: Cerrar sesión
Actor principal: Usuario autenticado 
Flujo principal:
1. El usuario hace clic en cerrar sesión.
2. El sistema finaliza la sesión actual y redirige a la pantalla de inicio.

# Diagrama de Casos de Uso
  ![image](https://github.com/user-attachments/assets/980de064-4ee6-445b-85b2-f39ff72a7953)
