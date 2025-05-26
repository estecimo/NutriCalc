# Requisitos No Funcionales (RNF)
Los Requisitos No Funcionales especifican los atributos de calidad que debe cumplir la aplicación para asegurar su usabilidad, seguridad, rendimiento y escalabilidad.  
|Código|Descripción|Categoría|Forma de verificación|
|------|-----------|---------|---------------------|
|RNF01|La aplicación debe generar un plan nutricional en menos de 3 segundos.  |Rendimiento|Pruebas cronometradas de tiempo de respuesta.|  
|RNF02|La interfaz debe ser intuitiva y navegable por un usuario sin conocimientos técnicos.  |Usabilidad|Pruebas de usuario con observación de interacción.|  
|RNF03|El sistema debe estar disponible al menos el 95% del tiempo.|Fiabilidad|Monitorización de uptime en el servidor.|  
|RNF04|Las credenciales de los usuarios deben almacenarse de forma segura utilizando hashing.  |Seguridad| Revisión de implementación con hashing seguro (bcrypt o similar).|  
|RNF05|La aplicación debe ser accesible desde dispositivos móviles y navegadores modernos.|Portabilidad  |Pruebas de visualización y funcionalidad en distintos navegadores y dispositivos.|
