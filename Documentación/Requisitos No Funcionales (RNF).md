# Requisitos No Funcionales (RNF)
Los Requisitos No Funcionales especifican los atributos de calidad que debe cumplir la aplicación para asegurar su usabilidad, seguridad, rendimiento y escalabilidad.  
|Código|Descripción|Categoría|Forma de verificación|
|------|-----------|---------|---------------------|
|RNF01|La interfaz debe ser responsiva y adaptable a dispositivos móviles y de escritorio.|Usabilidad|Pruebas en múltiples dispositivos y navegadores.|  
|RNF02|El sistema debe almacenar las contraseñas de forma segura utilizando cifrado.|Seguridad||Revisión del uso de algoritmos de hashing y cumplimiento de estándares OWASP.|  
|RNF03|El sistema debe responder a las acciones del usuario (ej. cálculos, navegación) en menos de 2 segundos.|Rendimiento|Pruebas de rendimiento con herramientas como Lighthouse o GTmetrix.|  
|RNF04|El sistema debe permitir la escalabilidad para la integración con futuras aplicaciones móviles o sistemas de terceros.|Escalabilidad|Revisión de arquitectura orientada a servicios y modularidad del backend.|  
|RNF05|El sistema debe ser compatible con los navegadores modernos (Chrome, Firefox, Safari, Edge).|Compatibilidad|Pruebas cruzadas de navegador.|
