# Artefactos Scrum

## Definition of Done (DoD) – NutriCalc

A continuación, se presenta un ejemplo concreto y detallado de la Definition of Done (DoD) aplicado a un incremento del proyecto final **NutriCalc**, específicamente para la funcionalidad de **generación de menú personalizado con exportación en PDF**.

Este DoD busca asegurar que cualquier incremento entregado cumpla con los más altos estándares de calidad, funcionalidad y alineación con los requerimientos definidos.

---

## Definition of Done – Generación de Menús y Exportación en PDF

Para que el incremento correspondiente a esta funcionalidad se considere **completado**, debe cumplir con las siguientes condiciones:

### 1. **Requisitos Funcionales Implementados**
- [x] El usuario puede generar un menú personalizado para un día completo (desayuno, colación, almuerzo, colación, cena).
- [x] El menú contiene alimentos equivalentes seleccionables por grupo alimenticio.
- [x] El sistema permite exportar dicho menú en un archivo PDF con formato legible y organizado.

### 2. **Criterios de Aceptación Verificados**
- [x] Se verificó que el PDF generado sea visualizable en navegadores estándar y lectores comunes (Adobe, Foxit, etc.).
- [x] El contenido del PDF debe coincidir con lo que el usuario seleccionó previamente (verificación cruzada automática).
- [x] El formato del documento incluye título, fecha, usuario, total de calorías, macronutrientes y tiempos de comida.

### 3. **Validación por el Product Owner**
- [x] La funcionalidad fue revisada y aprobada por el Product Owner (PO) en la revisión del Sprint.
- [x] El PO verificó que el incremento cumple con las historias de usuario y la documentación asociada.

### 4. **Pruebas Completadas**
- [x] Se ejecutaron pruebas funcionales manuales y automatizadas para asegurar la generación y descarga del PDF.
- [x] Se verificaron casos de error: selección vacía, grupos no balanceados, formato de datos incorrectos.
- [x] Cobertura de pruebas superior al 80% para los módulos implicados.

### 5. **Documentación Técnica y de Usuario**
- [x] Se documentó el módulo de generación de PDF en el README del repositorio.
- [x] Se actualizó la guía de usuario explicando cómo se genera y descarga el PDF.
- [x] El endpoint asociado está documentado con especificación OpenAPI.

### 6. **Revisión de Código y Estándares**
- [x] El código pasó revisión entre pares (peer review) a través de un Pull Request en GitHub.
- [x] Se respetaron las convenciones de codificación y se utilizaron linters (ESLint, Prettier).
- [x] El código está comentado y modularizado para facilitar mantenibilidad.

### 7. **Despliegue y Entorno**
- [x] El incremento fue integrado exitosamente en el entorno de staging.
- [x] Se verificó que el despliegue no afecta funcionalidades anteriores.
- [x] Los cambios se reflejan correctamente en el branch de producción para la segunda entrega (`entrega-2`).

---

## Conclusión

Este DoD garantiza que cualquier incremento del producto sea **potencialmente entregable** y cumpla con los criterios de calidad definidos por el equipo Scrum. Promueve una cultura de calidad continua, transparencia en el proceso y valor real para el usuario final.

> Referencia base: https://www.scrum.org/learning-series/definition-done/what-is-the-definition-of-done/
