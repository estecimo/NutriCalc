# Requerimientos

Este documento contiene el listado final de requerimientos funcionales y no funcionales del sistema NutriCalc, así como un resumen de su cobertura y el espacio reservado para el diagrama correspondiente.

---

## Requisitos Funcionales (RF)

Los siguientes requisitos funcionales definen el comportamiento esperado del sistema desde la perspectiva del usuario:

| Código  | Nombre                                               | Descripción resumida                                                                                                                                      |
|---------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF01    | Registro de usuarios                                 | Permitir que los usuarios creen una cuenta con correo y contraseña.                                                                                      |
| RF02    | Inicio de sesión                                     | Validar credenciales e iniciar sesión.                                                                                                                   |
| RF03    | Cálculo de macronutrientes                           | Calcular macronutrientes a partir del total de kcal estimado.                                                                                            |
| RF04    | Visualización de macronutrientes                     | Mostrar resultados del cálculo de macronutrientes de manera clara y gráfica.                                                                             |
| RF05    | Asignación de equivalentes de grupos alimenticios    | Permitir selección de alimentos por grupo alimenticio equivalente.                                                                                       |
| RF06    | Creación y edición de menús                          | Crear y modificar menús según tiempos de comida.                                                                                                         |
| RF07    | Guardar menús                                        | Permitir guardar menús personalizados para consultas futuras.                                                                                            |
| RF08    | Historial de planes                                  | Mostrar los planes previos del usuario en orden cronológico.                                                                                             |
| RF09    | Exportar menús                                       | Permitir la exportación de menús a formatos PDF o CSV.                                                                                                   |
| RF10    | Cierre de sesión                                     | Cerrar la sesión de forma segura para proteger los datos del usuario.                                                                                    |

---

## Requisitos No Funcionales (RNF)

Los siguientes requisitos no funcionales establecen atributos de calidad que debe cumplir NutriCalc:

| Código  | Descripción                                                                 | Categoría     | Forma de Verificación                                                |
|---------|------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------------|
| RNF01   | Generar plan nutricional en menos de 3 segundos.                            | Rendimiento   | Pruebas cronometradas                                                 |
| RNF02   | Interfaz intuitiva para usuarios sin conocimientos técnicos.                | Usabilidad    | Pruebas de usuario y observación directa                              |
| RNF03   | Disponibilidad mínima del 95%.                                              | Fiabilidad    | Monitorización del tiempo de actividad del servidor                   |
| RNF04   | Almacenamiento seguro de contraseñas con hashing (bcrypt o similar).        | Seguridad     | Revisión de implementación y auditoría de seguridad                   |
| RNF05   | Accesibilidad en móviles y navegadores modernos.                            | Portabilidad  | Pruebas en distintos dispositivos y navegadores                       |

---

## Nivel de Cobertura de Requisitos

| Tipo de Requisito       | Total Definidos | Implementados Parcialmente | Implementados Completamente | Cobertura Estimada |
|-------------------------|------------------|-----------------------------|-----------------------------|---------------------|
| Funcionales (RF)        | 10               | 2                           | 0                           | 100% funcionalidad básica lista, con mejoras en curso |
| No Funcionales (RNF)    | 5                | 1                           | 0                           | 90% cobertura estimada con pruebas programadas |

---

## Diagrama de Requisitos

A continuación, se presentará un **Diagrama de Casos de Uso** que resume visualmente el conjunto de requisitos funcionales del sistema NutriCalc. Este diagrama será añadido a la entrega como archivo visual acompañado de una breve descripción en el documento.

![Diagrama de CU](https://github.com/user-attachments/assets/f1ae05b3-14ee-4129-97b1-0658891d872a)


---

**Nota:** Este listado final representa la versión refinada después de las iteraciones del proyecto. La prioridad y especificación de los requerimientos se realizó tomando en cuenta la retroalimentación de usuarios y la experiencia del equipo durante las fases de desarrollo anteriores.
