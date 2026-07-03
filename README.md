# ⛵ Yam Charters · Experiencias a vela en Puerto Banús

Web de reservas de **Yam Charters**: experiencias a bordo de un **Jeanneau Sun Odyssey 42 CC**
desde **Puerto Banús** (Marbella) — coctelería, degustación mediterránea, baño en calas,
delfines y sunsets. Dos modalidades: **salida privada** (precio por horas y temporada, en
tiempo real) y **salida compartida** (por plazas). Pago integrado con **PayPal**.

> Incluido en todas las salidas: **patrón, cóctel de bienvenida, picoteo, bebida y parking gratis**.

## ✨ Características

- **Detección automática de temporada** según la fecha elegida:
  - **Temporada alta:** 1 jun – 30 sep
  - **Temporada baja:** 1 ene – 31 may y 1 oct – 31 dic
- **Precio en tiempo real** según duración (2, 3, 4, 6 u 8 h) y temporada (IVA incluido).
- **Selección de fecha, hora de inicio y duración**, con resumen de la reserva.
- **Pago con PayPal** (botones oficiales) con importe igual al total calculado.
- Alternativa de **reserva por WhatsApp o email** (mensaje prerrellenado) sin pago online.
- Secciones: galería, descripción y especificaciones, servicios, formulario de reserva y contacto.
- **Diseño responsive** (móvil, tablet y escritorio).

### Tabla de precios — salida privada (IVA incluido, −10% ya aplicado)

| Duración | Temporada baja | Temporada alta |
| -------- | -------------- | -------------- |
| 2 h      | 433,35 €       | 486 €          |
| 3 h      | 550,80 €       | 623,70 €       |
| 4 h      | 680,40 €       | 761,40 €       |
| 6 h      | 955,80 €       | 1.065,15 €     |
| 8 h      | 1.215 €        | 1.377 €        |

### Salida compartida

**55 € por persona** · ~3 horas · turnos de mañana y sunset · máx. 10 personas.

## 🧱 Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4**
- **@paypal/react-paypal-js** (pago)
- Despliegue estático en **GitHub Pages** (GitHub Actions)

No necesita backend: el pago lo gestiona PayPal en su propio entorno.

## 🚀 Ejecutar en local

Requisitos: **Node 18+** y npm.

```bash
# 1) Clonar
git clone https://github.com/JoseHino/yam-charters.git
cd yam-charters

# 2) Instalar dependencias
npm install

# 3) (Opcional) configurar PayPal
cp .env.example .env
#   y edita .env poniendo tu VITE_PAYPAL_CLIENT_ID

# 4) Arrancar en modo desarrollo
npm run dev
#   abre http://localhost:5173

# 5) Compilar para producción
npm run build      # genera /dist
npm run preview    # sirve /dist en local
```

## 💳 Activar el cobro con PayPal

La web funciona en **modo demo** hasta que configures tu cuenta:

1. Entra en <https://developer.paypal.com/> → **Apps & Credentials**.
2. Crea una app y copia el **Client ID** (usa *Sandbox* para pruebas, *Live* para cobrar de verdad).
3. **En local:** ponlo en `.env` como `VITE_PAYPAL_CLIENT_ID=...`.
4. **En el despliegue (GitHub Pages):** añádelo como *secret* del repositorio
   (`Settings → Secrets and variables → Actions → New repository secret`) con el nombre
   **`VITE_PAYPAL_CLIENT_ID`**. El workflow lo inyecta automáticamente en el build.

## 📦 Despliegue

El despliegue es automático con **GitHub Actions** (`.github/workflows/deploy.yml`):
cada push a `main` compila la web y la publica en GitHub Pages.

- **URL:** <https://josehino.github.io/yam-charters/>

Para desplegar en **Vercel/Netlify** en su lugar, importa el repo y usa
`npm run build` (carpeta de salida `dist`); no necesitas la variable `GITHUB_PAGES`.

## ✏️ Personalización

Casi todo el contenido está centralizado en [`src/data.ts`](src/data.ts):

- **Precios y temporadas** (`PRICES`, `seasonForDate`).
- **Especificaciones** del barco (`SPECS`).
- **Servicios** (`SERVICES`).
- **Galería** (`GALLERY`) — sustituye las imágenes de muestra (Unsplash) por fotos reales.
- **Contacto** (`CONTACT`) — teléfono, WhatsApp, email y dirección.

---

_Web de demostración. Imágenes y datos de contacto son marcadores de posición._
