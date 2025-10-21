// Navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Función para cambiar de sección
    function showSection(sectionId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección objetivo
        document.getElementById(sectionId).classList.add('active');
        
        // Actualizar enlace activo
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Scroll suave al principio de la sección
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Configurar eventos de clic en los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
        });
    });
    
    // Efecto hover mejorado para elementos del equipo
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(139, 0, 0, 0.3)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
        });
    });
    
    // Mensaje de bienvenida
    console.log('¡Bienvenido a Gorditas Michoacanas!');
});