/* ============================================================
   CONSTANTS
   ============================================================ */
const MODELS = [{
		id: 'claude',
		name: 'Claude',
		desc: "Anthropic's most intelligent model for complex tasks.",
		cls: 'claude',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/><path fill="#FCF2EE" fill-rule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z"/></svg>`
	},
	{
		id: 'chatgpt',
		name: 'ChatGPT',
		desc: "OpenAI's flagship model for advanced reasoning.",
		cls: 'chatgpt',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.639"><path fill="#fff" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.613-115.613 115.613H115.612C52.026 509.64 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/><path fill-rule="nonzero" d="M412.037 221.764a90.834 90.834 0 004.648-28.67 90.79 90.79 0 00-12.443-45.87c-16.37-28.496-46.738-46.089-79.605-46.089-6.466 0-12.943.683-19.264 2.04a90.765 90.765 0 00-67.881-30.515h-.576c-.059.002-.149.002-.216.002-39.807 0-75.108 25.686-87.346 63.554-25.626 5.239-47.748 21.31-60.682 44.03a91.873 91.873 0 00-12.407 46.077 91.833 91.833 0 0023.694 61.553 90.802 90.802 0 00-4.649 28.67 90.804 90.804 0 0012.442 45.87c16.369 28.504 46.74 46.087 79.61 46.087a91.81 91.81 0 0019.253-2.04 90.783 90.783 0 0067.887 30.516h.576l.234-.001c39.829 0 75.119-25.686 87.357-63.588 25.626-5.242 47.748-21.312 60.682-44.033a91.718 91.718 0 0012.383-46.035 91.83 91.83 0 00-23.693-61.553l-.004-.005zM275.102 413.161h-.094a68.146 68.146 0 01-43.611-15.8 56.936 56.936 0 002.155-1.221l72.54-41.901a11.799 11.799 0 005.962-10.251V241.651l30.661 17.704c.326.163.55.479.596.84v84.693c-.042 37.653-30.554 68.198-68.21 68.273h.001zm-146.689-62.649a68.128 68.128 0 01-9.152-34.085c0-3.904.341-7.817 1.005-11.663.539.323 1.48.897 2.155 1.285l72.54 41.901a11.832 11.832 0 0011.918-.002l88.563-51.137v35.408a1.1 1.1 0 01-.438.94l-73.33 42.339a68.43 68.43 0 01-34.11 9.12 68.359 68.359 0 01-59.15-34.11l-.001.004zm-19.083-158.36a68.044 68.044 0 0135.538-29.934c0 .625-.036 1.731-.036 2.5v83.801l-.001.07a11.79 11.79 0 005.954 10.242l88.564 51.13-30.661 17.704a1.096 1.096 0 01-1.034.093l-73.337-42.375a68.36 68.36 0 01-34.095-59.143 68.412 68.412 0 019.112-34.085l-.004-.003zm251.907 58.621l-88.563-51.137 30.661-17.697a1.097 1.097 0 011.034-.094l73.337 42.339c21.109 12.195 34.132 34.746 34.132 59.132 0 28.604-17.849 54.199-44.686 64.078v-86.308c.004-.032.004-.065.004-.096 0-4.219-2.261-8.119-5.919-10.217zm30.518-45.93c-.539-.331-1.48-.898-2.155-1.286l-72.54-41.901a11.842 11.842 0 00-5.958-1.611c-2.092 0-4.15.558-5.957 1.611l-88.564 51.137v-35.408l-.001-.061a1.1 1.1 0 01.44-.88l73.33-42.303a68.301 68.301 0 0134.108-9.129c37.704 0 68.281 30.577 68.281 68.281a68.69 68.69 0 01-.984 11.545v.005zm-191.843 63.109l-30.668-17.704a1.09 1.09 0 01-.596-.84v-84.692c.016-37.685 30.593-68.236 68.281-68.236a68.332 68.332 0 0143.689 15.804 63.09 63.09 0 00-2.155 1.222l-72.54 41.9a11.794 11.794 0 00-5.961 10.248v.068l-.05 102.23zm16.655-35.91l39.445-22.782 39.444 22.767v45.55l-39.444 22.767-39.445-22.767v-45.535z"/></svg>`
	},
	{
		id: 'gemini',
		name: 'Gemini',
		desc: "Google's most capable model for large context.",
		cls: 'gemini',
		svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><mask id="maskme" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="65"><path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="#000"/><path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#prefix__paint0_linear_2001_67)"/></mask><g mask="url(#maskme)"><g filter="url(#prefix__filter0_f_2001_67)"><path d="M-5.859 50.734c7.498 2.663 16.116-2.33 19.249-11.152 3.133-8.821-.406-18.131-7.904-20.794-7.498-2.663-16.116 2.33-19.25 11.151-3.132 8.822.407 18.132 7.905 20.795z" fill="#FFE432"/></g><g filter="url(#prefix__filter1_f_2001_67)"><path d="M27.433 21.649c10.3 0 18.651-8.535 18.651-19.062 0-10.528-8.35-19.062-18.651-19.062S8.78-7.94 8.78 2.587c0 10.527 8.35 19.062 18.652 19.062z" fill="#FC413D"/></g><g filter="url(#prefix__filter2_f_2001_67)"><path d="M20.184 82.608c10.753-.525 18.918-12.244 18.237-26.174-.68-13.93-9.95-24.797-20.703-24.271C6.965 32.689-1.2 44.407-.519 58.337c.681 13.93 9.95 24.797 20.703 24.271z" fill="#00B95C"/></g><g filter="url(#prefix__filter3_f_2001_67)"><path d="M20.184 82.608c10.753-.525 18.918-12.244 18.237-26.174-.68-13.93-9.95-24.797-20.703-24.271C6.965 32.689-1.2 44.407-.519 58.337c.681 13.93 9.95 24.797 20.703 24.271z" fill="#00B95C"/></g><g filter="url(#prefix__filter4_f_2001_67)"><path d="M30.954 74.181c9.014-5.485 11.427-17.976 5.389-27.9-6.038-9.925-18.241-13.524-27.256-8.04-9.015 5.486-11.428 17.977-5.39 27.902 6.04 9.924 18.242 13.523 27.257 8.038z" fill="#00B95C"/></g><g filter="url(#prefix__filter5_f_2001_67)"><path d="M67.391 42.993c10.132 0 18.346-7.91 18.346-17.666 0-9.757-8.214-17.667-18.346-17.667s-18.346 7.91-18.346 17.667c0 9.757 8.214 17.666 18.346 17.666z" fill="#3186FF"/></g><g filter="url(#prefix__filter6_f_2001_67)"><path d="M-13.065 40.944c9.33 7.094 22.959 4.869 30.442-4.972 7.483-9.84 5.987-23.569-3.343-30.663C4.704-1.786-8.924.439-16.408 10.28c-7.483 9.84-5.986 23.57 3.343 30.664z" fill="#FBBC04"/></g><g filter="url(#prefix__filter7_f_2001_67)"><path d="M34.74 51.43c11.135 7.656 25.896 5.524 32.968-4.764 7.073-10.287 3.779-24.832-7.357-32.488C49.215 6.52 34.455 8.654 27.382 18.94c-7.072 10.288-3.779 24.833 7.357 32.49z" fill="#3186FF"/></g><g filter="url(#prefix__filter8_f_2001_67)"><path d="M54.984-2.336c2.833 3.852-.808 11.34-8.131 16.727-7.324 5.387-15.557 6.631-18.39 2.78-2.833-3.853.807-11.342 8.13-16.728 7.324-5.387 15.558-6.631 18.39-2.78z" fill="#749BFF"/></g><g filter="url(#prefix__filter9_f_2001_67)"><path d="M31.727 16.104C43.053 5.598 46.94-8.626 40.41-15.666c-6.53-7.04-21.006-4.232-32.332 6.274s-15.214 24.73-8.683 31.77c6.53 7.04 21.006 4.232 32.332-6.274z" fill="#FC413D"/></g><g filter="url(#prefix__filter10_f_2001_67)"><path d="M8.51 53.838c6.732 4.818 14.46 5.55 17.262 1.636 2.802-3.915-.384-10.994-7.116-15.812-6.731-4.818-14.46-5.55-17.261-1.636-2.802 3.915.383 10.994 7.115 15.812z" fill="#FFEE48"/></g></g><defs><filter id="prefix__filter0_f_2001_67" x="-19.824" y="13.152" width="39.274" height="43.217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2.46" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter1_f_2001_67" x="-15.001" y="-40.257" width="84.868" height="85.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="11.891" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter2_f_2001_67" x="-20.776" y="11.927" width="79.454" height="90.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter3_f_2001_67" x="-20.776" y="11.927" width="79.454" height="90.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter4_f_2001_67" x="-19.845" y="15.459" width="79.731" height="81.505" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter5_f_2001_67" x="29.832" y="-11.552" width="75.117" height="73.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="9.606" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter6_f_2001_67" x="-38.583" y="-16.253" width="78.135" height="78.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="8.706" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter7_f_2001_67" x="8.107" y="-5.966" width="78.877" height="77.539" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="7.775" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter8_f_2001_67" x="13.587" y="-18.488" width="56.272" height="51.81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="6.957" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter9_f_2001_67" x="-15.526" y="-31.297" width="70.856" height="69.306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="5.876" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter10_f_2001_67" x="-14.168" y="20.964" width="55.501" height="51.571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="7.273" result="effect1_foregroundBlur_2001_67"/></filter><linearGradient id="prefix__paint0_linear_2001_67" x1="18.447" y1="43.42" x2="52.153" y2="15.004" gradientUnits="userSpaceOnUse"><stop stop-color="#4893FC"/><stop offset=".27" stop-color="#4893FC"/><stop offset=".777" stop-color="#969DFF"/><stop offset="1" stop-color="#BD99FE"/></linearGradient></defs></svg>`
	},
	{
		id: 'deepseek',
		name: 'Deepseek',
		desc: "High-performance model by Deepseek AI.",
		cls: 'deepseek',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><path fill="#fff" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.613-115.613 115.613H115.612C52.026 509.64 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/><path fill="#4D6BFE" fill-rule="nonzero" d="M440.898 139.167c-4.001-1.961-5.723 1.776-8.062 3.673-.801.612-1.479 1.407-2.154 2.141-5.848 6.246-12.681 10.349-21.607 9.859-13.048-.734-24.192 3.368-34.04 13.348-2.093-12.307-9.048-19.658-19.635-24.37-5.54-2.449-11.141-4.9-15.02-10.227-2.708-3.795-3.447-8.021-4.801-12.185-.861-2.509-1.725-5.082-4.618-5.512-3.139-.49-4.372 2.142-5.601 4.349-4.925 9.002-6.833 18.921-6.647 28.962.432 22.597 9.972 40.597 28.932 53.397 2.154 1.47 2.707 2.939 2.032 5.082-1.293 4.41-2.832 8.695-4.186 13.105-.862 2.817-2.157 3.429-5.172 2.205-10.402-4.346-19.391-10.778-27.332-18.553-13.481-13.044-25.668-27.434-40.873-38.702a177.614 177.614 0 00-10.834-7.409c-15.512-15.063 2.032-27.434 6.094-28.902 4.247-1.532 1.478-6.797-12.251-6.736-13.727.061-26.285 4.653-42.288 10.777-2.34.92-4.801 1.593-7.326 2.142-14.527-2.756-29.608-3.368-45.367-1.593-29.671 3.305-53.368 17.329-70.788 41.272-20.928 28.785-25.854 61.482-19.821 95.59 6.34 35.943 24.683 65.704 52.876 88.974 29.239 24.123 62.911 35.943 101.32 33.677 23.329-1.346 49.307-4.468 78.607-29.27 7.387 3.673 15.142 5.144 28.008 6.246 9.911.92 19.452-.49 26.839-2.019 11.573-2.449 10.773-13.166 6.586-15.124-33.915-15.797-26.47-9.368-33.24-14.573 17.235-20.39 43.213-41.577 53.369-110.222.8-5.448.121-8.877 0-13.287-.061-2.692.553-3.734 3.632-4.041 8.494-.981 16.742-3.305 24.314-7.471 21.975-12.002 30.84-31.719 32.933-55.355.307-3.612-.061-7.348-3.879-9.245v-.003zM249.4 351.89c-32.872-25.838-48.814-34.352-55.4-33.984-6.155.368-5.048 7.41-3.694 12.002 1.415 4.532 3.264 7.654 5.848 11.634 1.785 2.634 3.017 6.551-1.784 9.493-10.587 6.55-28.993-2.205-29.856-2.635-21.421-12.614-39.334-29.269-51.954-52.047-12.187-21.924-19.267-45.435-20.435-70.542-.308-6.061 1.478-8.207 7.509-9.307 7.94-1.471 16.127-1.778 24.068-.615 33.547 4.9 62.108 19.902 86.054 43.66 13.666 13.531 24.007 29.699 34.658 45.496 11.326 16.778 23.514 32.761 39.026 45.865 5.479 4.592 9.848 8.083 14.035 10.656-12.62 1.407-33.673 1.714-48.075-9.676zm15.899-102.519c.521-2.111 2.421-3.658 4.722-3.658a4.74 4.74 0 011.661.305c.678.246 1.293.614 1.786 1.163.861.859 1.354 2.083 1.354 3.368 0 2.695-2.154 4.837-4.862 4.837a4.748 4.748 0 01-4.738-4.034 5.01 5.01 0 01.077-1.981zm47.208 26.915c-2.606.996-5.2 1.778-7.707 1.88-4.679.244-9.787-1.654-12.556-3.981-4.308-3.612-7.386-5.631-8.679-11.941-.554-2.695-.247-6.858.246-9.246 1.108-5.144-.124-8.451-3.754-11.451-2.954-2.449-6.711-3.122-10.834-3.122-1.539 0-2.954-.673-4.001-1.224-1.724-.856-3.139-3-1.785-5.634.432-.856 2.525-2.939 3.018-3.305 5.6-3.185 12.065-2.144 18.034.244 5.54 2.266 9.727 6.429 15.759 12.307 6.155 7.102 7.263 9.063 10.773 14.39 2.771 4.163 5.294 8.451 7.018 13.348.877 2.561.071 4.74-2.341 6.277-.981.625-2.109 1.044-3.191 1.458z"/></svg>`
	},
	{
		id: 'grok',
		name: 'Grok',
		desc: "High-performance model by Grok AI.",
		cls: 'grok',
		svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 492"><path fill-rule="evenodd" clip-rule="evenodd" d="M197.76 315.52l170.197-125.803c8.342-6.186 20.267-3.776 24.256 5.803 20.907 50.539 11.563 111.253-30.08 152.939-41.621 41.685-99.562 50.816-152.512 29.994l-57.834 26.816c82.965 56.768 183.701 42.731 246.656-20.33 49.941-50.006 65.408-118.166 50.944-179.627l.128.149c-20.971-90.282 5.162-126.378 58.666-200.17 1.28-1.75 2.56-3.499 3.819-5.291l-70.421 70.507v-.214l-243.883 245.27m-35.072 30.528c-59.563-56.96-49.28-145.088 1.515-195.926 37.568-37.61 99.136-52.97 152.874-30.4l57.707-26.666a166.554 166.554 0 00-39.019-21.334 191.467 191.467 0 00-208.042 41.942c-54.038 54.101-71.04 137.301-41.856 208.298 21.802 53.056-13.931 90.582-49.92 128.47C23.104 463.915 10.304 477.333 0 491.541l162.56-145.386" fill="#000"/></svg>`
	},
	{
		id: 'gwen',
		name: 'Qwen',
		desc: "High-performance model by Qwen AI.",
		cls: 'gwen',
		svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M268.885 28.587a9886.443 9886.443 0 0125.046 44.266 3.833 3.833 0 003.349 1.942h118.443c3.712 0 6.869 2.346 9.514 6.976l31.019 54.826c4.053 7.19 5.12 10.198.512 17.856a1129.453 1129.453 0 00-16.213 27.734l-7.83 14.037c-2.261 4.181-4.757 5.973-.853 10.923l56.576 98.922c3.669 6.422 2.368 10.539-.917 16.427a2813.646 2813.646 0 01-28.48 49.92c-3.392 5.803-7.51 8-14.507 7.893a916.763 916.763 0 00-49.643.342 2.12 2.12 0 00-1.728 1.066 12257.343 12257.343 0 01-57.706 101.12c-3.606 6.251-8.107 7.744-15.467 7.766-21.269.064-42.709.085-64.363.042a11.45 11.45 0 01-9.92-5.781l-28.48-49.557a1.919 1.919 0 00-1.77-1.046H106.283c-6.08.64-11.798-.021-17.174-1.962l-34.197-59.094a11.58 11.58 0 01-.043-11.52l25.75-45.226a4.225 4.225 0 000-4.203 11754.482 11754.482 0 01-40-69.803l-16.854-29.76c-3.413-6.613-3.69-10.581 2.027-20.586 9.92-17.344 19.776-34.667 29.59-51.968 2.815-4.992 6.485-7.126 12.458-7.147 18.41-.078 36.821-.085 55.232-.021a2.651 2.651 0 002.283-1.344L185.216 27.2a10.412 10.412 0 019.003-5.248c11.178-.021 22.464 0 33.77-.128l21.696-.49c7.275-.065 15.446.682 19.2 7.253zm-73.216 8.597a1.281 1.281 0 00-1.109.64l-61.141 106.987a3.347 3.347 0 01-2.88 1.664H69.397c-1.194 0-1.493.533-.874 1.578l123.946 216.662c.534.896.278 1.322-.725 1.344l-59.627.32a4.647 4.647 0 00-4.266 2.474l-28.16 49.28c-.939 1.664-.448 2.518 1.45 2.518l121.942.17c.981 0 1.706.427 2.218 1.302l29.931 52.352c.981 1.728 1.963 1.749 2.965 0l106.795-186.88 16.704-29.483a1.169 1.169 0 011.024-.601 1.17 1.17 0 011.024.601l30.379 53.973a2.599 2.599 0 002.282 1.323l58.944-.427a.846.846 0 00.858-.853.877.877 0 00-.111-.427L414.229 203.2a2.31 2.31 0 010-2.411l6.251-10.816 23.893-42.176c.512-.874.256-1.322-.746-1.322h-247.36c-1.259 0-1.558-.555-.918-1.643l30.592-53.44a2.276 2.276 0 000-2.432L196.8 37.845a1.276 1.276 0 00-1.131-.661zm134.187 171.093c.981 0 1.237.427.725 1.28l-17.749 31.254-55.744 97.813a1.199 1.199 0 01-1.067.619 1.242 1.242 0 01-1.066-.619l-73.664-128.683c-.427-.725-.214-1.109.597-1.152l4.608-.256 143.403-.256h-.043z" fill="url(#prefix__paint0_linear_9_19)"/><defs><linearGradient id="prefix__paint0_linear_9_19" x1="21.323" y1="21.33" x2="46955.3" y2="21.33" gradientUnits="userSpaceOnUse"><stop stop-color="#6336E7" stop-opacity=".84"/><stop offset="1" stop-color="#6F69F7" stop-opacity=".84"/></linearGradient></defs></svg>`
	}
];

const MAX_FILE_SIZE = 20 * 1024 * 1024;
const MAX_FILES = 10;
const ACCEPTED = {
	'image/png': 'PNG',
	'image/jpeg': 'JPG',
	'image/jpg': 'JPG',
	'image/webp': 'WEBP',
	'application/pdf': 'PDF',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
	'text/plain': 'TXT'
};

/* ============================================================
   THEME — global so all pages can use dark / applyTheme
   ============================================================ */
let dark = localStorage.getItem('darkMode') === 'true';

function applyTheme() {
    document.documentElement.style.setProperty('--s0', dark ? '#1A1A2E' : '#FFFFFF');
    document.documentElement.style.setProperty('--s1', dark ? '#22223B' : '#F9FAFB');
    document.documentElement.style.setProperty('--s2', dark ? '#2D2D44' : '#F3F4F6');
    document.documentElement.style.setProperty('--bg', dark ? '#111122' : '#F0F2FA');
    document.documentElement.style.setProperty('--t1', dark ? '#E8E8F0' : '#1A2E1C');
    document.documentElement.style.setProperty('--t2', dark ? '#A0A0C0' : '#4B634D');
    document.documentElement.style.setProperty('--t3', dark ? '#6060A0' : '#9CA3AF');
    document.documentElement.style.setProperty('--bd', dark ? '#333360' : '#E5E7EB');
    document.documentElement.style.setProperty('--bd2', dark ? '#444480' : '#D1D5DB');
}
applyTheme();

/* ============================================================
   BUILDER PAGE — only runs when index.html is loaded
   ============================================================ */
if (document.getElementById('mdlDd')) {

/* ============================================================
   STATE
   ============================================================ */
const S = {
	model: MODELS[0],
	files: [],
	rmIdx: null,
	savedRange: null
};

/* ============================================================
   DOM REFS
   ============================================================ */
const $ = id => document.getElementById(id);
const D = {
	mdlDd: $('mdlDd'),
	uploadZone: $('uploadZone'),
	fileInp: $('fileInp'),
	fileList: $('fileList'),
	fileErr: $('fileErr'),
	fileErrTxt: $('fileErrTxt'),
	fcount: $('fcount'),
	fcountTxt: $('fcountTxt'),
	promptEd: $('promptEd'),
	charCt: $('charCt'),
	wordCt: $('wordCt'),
	prevBox: $('prevBox'),
	varBtn: $('varBtn'),
	varDd: $('varDd'),
	insFileBtn: $('insFileBtn'),
	insFileDd: $('insFileDd'),
	insFileLst: $('insFileLst'),
	frefPanel: $('frefPanel'),
	frefLst: $('frefLst'),
	linkBtn: $('linkBtn'),
	moreBtn: $('moreBtn'),
	moreDd: $('moreDd'),
	cpyPromptBtn: $('cpyPromptBtn'),
	cpyPrevBtn: $('cpyPrevBtn'),
	expTxtBtn: $('expTxtBtn'),
	expMdBtn: $('expMdBtn'),
	expJsonBtn: $('expJsonBtn'),
	clearBtn: $('clearBtn'),
	contBtn: $('contBtn'),
	sumMdlIc: $('sumMdlIc'),
	sumMdlName: $('sumMdlName'),
	sumFiles: $('sumFiles'),
	sumLen: $('sumLen'),
	sumWords: $('sumWords'),
	sumHint: $('sumHint'),
	rmModal: $('rmModal'),
	rmFileName: $('rmFileName'),
	rmCancel: $('rmCancel'),
	rmConfirm: $('rmConfirm'),
	toasts: $('toasts'),
	steps: document.querySelectorAll('.step'),
};

/* ============================================================
   MODEL MODULE
   ============================================================ */
const mdlTrigger   = document.getElementById('mdlTrigger');
const triggerIcon  = document.getElementById('triggerIcon');
const triggerName  = document.getElementById('triggerName');

function syncTrigger(m) {
	if (!mdlTrigger) return;
	triggerIcon.className = `micon ${m.cls}`;
	triggerIcon.innerHTML = m.svg;
	triggerName.textContent = m.name;
}

function renderMdlDd() {
	D.mdlDd.innerHTML = MODELS.map(m => `
    <div class="mdl-opt ${m.id === S.model.id ? 'sel' : ''}" data-mdl="${m.id}" role="option">
      <div class="micon ${m.cls}">${m.svg}</div>
      <div class="mdl-opt-info">
        <div class="mdl-opt-name">${m.name}</div>
      </div>
      ${m.id === S.model.id ? `<svg class="chk-ic" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
    </div>`).join('') + 
		``;
}

function pickModel(id) {
	const m = MODELS.find(x => x.id === id);
	if (!m) return;
	S.model = m;
	syncTrigger(m);
	D.sumMdlIc.className = `micon ${m.cls}`;
	D.sumMdlIc.innerHTML = m.svg;
	D.sumMdlName.textContent = m.name;
	closeMdlDd();
	renderMdlDd();
	updateCont();
}

function openMdlDd() {
	renderMdlDd();
	D.mdlDd.classList.add('open');
	if (mdlTrigger) {
		mdlTrigger.classList.add('open');
		mdlTrigger.setAttribute('aria-expanded', 'true');
	}
}

function closeMdlDd() {
	D.mdlDd.classList.remove('open');
	if (mdlTrigger) {
		mdlTrigger.classList.remove('open');
		mdlTrigger.setAttribute('aria-expanded', 'false');
	}
}

// Wire up trigger button (mobile only — hidden via CSS on desktop)
if (mdlTrigger) {
	mdlTrigger.addEventListener('click', e => {
		e.stopPropagation();
		D.mdlDd.classList.contains('open') ? closeMdlDd() : openMdlDd();
	});
}

/* ============================================================
   FILE MODULE
   ============================================================ */
function fmtBytes(b) {
	if (b < 1024) return b + ' B';
	if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
	return (b / 1048576).toFixed(2) + ' MB';
}

function fExt(name) {
	return name.split('.').pop().toLowerCase();
}

function fCls(f) {
	const e = fExt(f.name);
	return ['png', 'jpg', 'jpeg', 'webp'].includes(e) ? 'img' : e;
}

function fLabel(f) {
	return fExt(f.name).toUpperCase();
}

function validateF(f) {
	if (!ACCEPTED[f.type]) return `"${f.name}" is not supported. Use: PNG, JPG, WEBP, PDF, DOCX, or TXT.`;
	if (f.size > MAX_FILE_SIZE) return `"${f.name}" exceeds the 20MB limit (${fmtBytes(f.size)}).`;
	return null;
}

function addFiles(list) {
	hideErr();
	let errs = [],
		added = 0;
	for (const f of list) {
		if (S.files.length >= MAX_FILES) {
			errs.push(`Maximum ${MAX_FILES} files allowed.`);
			break;
		}
		if (S.files.find(e => e.name === f.name && e.size === f.size)) {
			errs.push(`"${f.name}" is already uploaded.`);
			continue;
		}
		const e = validateF(f);
		if (e) {
			errs.push(e);
			continue;
		}
		if (f.type.startsWith('image/')) f._url = URL.createObjectURL(f);
		S.files.push(f);
		added++;
	}
	if (errs.length) showErr(errs[0]);
	if (added) {
		renderFiles();
		refreshFilePanels();
		updateCont();
		if (!errs.length) toast('ok', 'Files uploaded!', `${added} file${added>1?'s':''} added.`);
	}
}

function delFile(i) {
	const f = S.files[i];
	if (f._url) URL.revokeObjectURL(f._url);
	S.files.splice(i, 1);
	renderFiles();
	refreshFilePanels();
	updateCont();
}

function renderFiles() {
	if (!S.files.length) {
		D.fileList.innerHTML = '';
		D.fcount.style.display = 'none';
		return;
	}
	D.fileList.innerHTML = S.files.map((f, i) => {
		const cls = fCls(f);
		const thumb = cls === 'img' && f._url ?
			`<img class="fthumb" src="${f._url}" alt="">` :
			`<div class="ficon ${cls}">${fLabel(f)}</div>`;
		return `<div class="file-row">
      ${thumb}
      <div class="finfo">
        <div class="fname">${esc(f.name)}</div>
        <div class="fmeta">${fLabel(f)} &nbsp;•&nbsp; ${fmtBytes(f.size)}</div>
      </div>
      <button class="fdel" data-i="${i}" title="Remove ${esc(f.name)}" aria-label="Remove ${esc(f.name)}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
      </button>
    </div>`;
	}).join('');

	const total = S.files.reduce((s, f) => s + f.size, 0);
	D.fcountTxt.textContent = `${S.files.length} file${S.files.length>1?'s':''} uploaded (${fmtBytes(total)})`;
	D.fcount.style.display = 'flex';
}

function showErr(msg) {
	D.fileErrTxt.textContent = msg;
	D.fileErr.style.display = 'flex';
}

function hideErr() {
	D.fileErr.style.display = 'none';
}

function showRmModal(i) {
	S.rmIdx = i;
	D.rmFileName.textContent = `"${S.files[i].name}"`;
	D.rmModal.classList.add('open');
}

function hideRmModal() {
	D.rmModal.classList.remove('open');
	S.rmIdx = null;
}

/* ============================================================
   PROMPT MODULE
   ============================================================ */
function plainText() {
	return D.promptEd.innerText || '';
}

function updateStats() {
	const txt = plainText();
	const ch = txt.length;
	const wds = txt.trim() === '' ? 0 : txt.trim().split(/\s+/).length;
	D.charCt.textContent = `${ch.toLocaleString()} character${ch!==1?'s':''}`;
	D.wordCt.textContent = `${wds.toLocaleString()} word${wds!==1?'s':''}`;
	D.sumLen.textContent = `${ch.toLocaleString()} characters`;
	D.sumWords.textContent = `${wds.toLocaleString()} words`;
	updatePreview();
	updateCont();
	updateHint();
}

function updatePreview() {
	const txt = plainText();
	if (!txt.trim()) {
		D.prevBox.innerHTML = '<span class="muted">Your prompt will appear here as you type above...</span>';
	} else {
		D.prevBox.textContent = txt;
	}
}

function saveRange() {
	const sel = window.getSelection();
	if (sel && sel.rangeCount) S.savedRange = sel.getRangeAt(0).cloneRange();
}

function restoreRange() {
	if (!S.savedRange) return;
	const sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(S.savedRange);
}

function insertText(txt) {
	D.promptEd.focus();
	restoreRange();
	const sel = window.getSelection();
	if (sel && sel.rangeCount) {
		const r = sel.getRangeAt(0);
		r.deleteContents();
		const node = document.createTextNode(txt);
		r.insertNode(node);
		r.setStartAfter(node);
		r.collapse(true);
		sel.removeAllRanges();
		sel.addRange(r);
	} else {
		D.promptEd.appendChild(document.createTextNode(txt));
	}
	updateStats();
}

function execCmd(cmd, val) {
	D.promptEd.focus();
	document.execCommand(cmd, false, val || null);
	updateStats();
}

/* ============================================================
   SUMMARY & PANELS
   ============================================================ */
function refreshFilePanels() {
	// Summary sidebar thumbnails
	if (!S.files.length) {
		D.sumFiles.innerHTML = '<span class="muted" style="font-size:13px">No files uploaded</span>';
	} else {
		const show = S.files.slice(0, 4);
		const rest = S.files.length - show.length;
		D.sumFiles.innerHTML = show.map(f => {
			const cls = fCls(f);
			if (cls === 'img' && f._url) return `<img src="${f._url}" style="width:25px;height:25px;border-radius:5px;object-fit:cover" title="${esc(f.name)}">`;
			return `<div class="fthb ${cls}" title="${esc(f.name)}">${fLabel(f)}</div>`;
		}).join('') + (rest > 0 ? `<div class="fthb more">+${rest}</div>` : '');
	}

	// Prompt editor file ref panel
	if (!S.files.length) {
		D.frefPanel.style.display = 'none';
		D.insFileLst.innerHTML = '<div class="dd-item muted" style="cursor:default;pointer-events:none">No files uploaded yet</div>';
		return;
	}
	D.frefPanel.style.display = 'block';
	const fItems = S.files.map(f => {
		const cls = fCls(f);
		return `<div class="fref-item" data-fn="${esc(f.name)}">
      <div class="ficon ${cls}" style="width:22px;height:22px;font-size:7px;flex-shrink:0">${fLabel(f)}</div>
      <span class="fref-name">${esc(f.name)}</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--t3);flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
    </div>`;
	}).join('');
	D.frefLst.innerHTML = fItems;

	// Insert file dropdown items
	D.insFileLst.innerHTML = S.files.map(f => {
		const cls = fCls(f);
		return `<div class="dd-item" data-fn="${esc(f.name)}">
      <div class="ficon ${cls}" style="width:18px;height:18px;font-size:7px;flex-shrink:0">${fLabel(f)}</div>
      ${esc(f.name)}
    </div>`;
	}).join('');
}

function updateCont() {
	const has = plainText().trim().length > 0;
	D.contBtn.disabled = !has;
	D.contBtn.textContent = has ? 'Export Prompt' : 'Continue to Build Prompt';
}

function updateHint() {
	const has = plainText().trim().length > 0;
	D.sumHint.textContent = has ?
		'Your prompt is ready! Click export to use it.' :
		'Add files and continue to build your prompt.';
}

/* ============================================================
   EXPORT MODULE
   ============================================================ */
async function copyText(txt) {
	if (navigator.clipboard) {
		try {
			await navigator.clipboard.writeText(txt);
			return true;
		} catch (e) {}
	}
	const ta = document.createElement('textarea');
	ta.value = txt;
	ta.style.position = 'fixed';
	ta.style.opacity = '0';
	document.body.appendChild(ta);
	ta.select();
	const ok = document.execCommand('copy');
	document.body.removeChild(ta);
	return ok;
}

function buildExportStr() {
	const files = S.files.map(f => f.name).join(', ') || 'None';
	return `Model: ${S.model.name}\nFiles: ${files}\n\n${plainText()}`;
}

function downloadFile(name, content) {
	const b = new Blob([content], {
		type: 'text/plain;charset=utf-8'
	});
	const u = URL.createObjectURL(b);
	const a = document.createElement('a');
	a.href = u;
	a.download = name;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(u);
}

async function handleCopy() {
	const txt = plainText();
	if (!txt.trim()) {
		toast('er', 'Nothing to copy', 'Write a prompt first.');
		return;
	}
	const ok = await copyText(buildExportStr());
	ok ? toast('ok', 'Copied!', 'Prompt copied to clipboard.') : toast('er', 'Copy failed', 'Please copy manually.');
}

/* ============================================================
   TOAST MODULE
   ============================================================ */
function toast(type, title, desc, ms = 4000) {
	const id = 'T' + Date.now();
	const icons = {
		ok: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>`,
		er: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
		in: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="#5C5BD4" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
	};
	const el = document.createElement('div');
	el.className = `toast ${type}`;
	el.id = id;
	el.innerHTML = `${icons[type]}<div class="t-body"><div class="t-title">${title}</div>${desc?`<div class="t-desc">${desc}</div>`:''}</div>
    <svg class="t-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" onclick="dismissToast('${id}')"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
	D.toasts.appendChild(el);
	setTimeout(() => dismissToast(id), ms);
}

window.dismissToast = function(id) {
	const el = document.getElementById(id);
	if (!el) return;
	el.style.animation = 'toastOut 230ms ease forwards';
	setTimeout(() => el.remove(), 230);
};

/* ============================================================
   STEP NAV
   ============================================================ */
function setStep(n) {
	D.steps.forEach((s, i) => {
		s.classList.remove('active', 'done');
		if (i + 1 < n) s.classList.add('done');
		else if (i + 1 === n) s.classList.add('active');
	});
}

function scrollTo(id) {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}

/* ============================================================
   UTILITY
   ============================================================ */
function esc(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function closeAllDds() {
	document.querySelectorAll('.dd-menu.open,.mdl-dd.open').forEach(d => d.classList.remove('open'));
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */

D.mdlDd.addEventListener('click', e => {
	const o = e.target.closest('.mdl-opt');
	if (o) pickModel(o.dataset.mdl);
});

// File upload
D.uploadZone.addEventListener('click', e => {
	if (!e.target.closest('.fdel')) D.fileInp.click();
});
D.fileInp.addEventListener('change', e => {
	addFiles([...e.target.files]);
	D.fileInp.value = '';
});
D.uploadZone.addEventListener('dragover', e => {
	e.preventDefault();
	D.uploadZone.classList.add('drag');
});
D.uploadZone.addEventListener('dragleave', e => {
	if (!D.uploadZone.contains(e.relatedTarget)) D.uploadZone.classList.remove('drag');
});
D.uploadZone.addEventListener('drop', e => {
	e.preventDefault();
	D.uploadZone.classList.remove('drag');
	addFiles([...e.dataTransfer.files]);
});
D.fileList.addEventListener('click', e => {
	const btn = e.target.closest('.fdel');
	if (btn) showRmModal(parseInt(btn.dataset.i));
});

// Remove modal
D.rmCancel.addEventListener('click', hideRmModal);
D.rmConfirm.addEventListener('click', () => {
	if (S.rmIdx !== null) {
		const name = S.files[S.rmIdx].name;
		delFile(S.rmIdx);
		hideRmModal();
		toast('in', 'File removed', `"${name}" was removed.`);
	}
});
D.rmModal.addEventListener('click', e => {
	if (e.target === D.rmModal) hideRmModal();
});

// Prompt editor
D.promptEd.addEventListener('input', updateStats);
D.promptEd.addEventListener('mouseup', saveRange);
D.promptEd.addEventListener('keyup', saveRange);
D.promptEd.addEventListener('keydown', e => {
	if (e.ctrlKey || e.metaKey) {
		if (e.key === 'b') {
			e.preventDefault();
			execCmd('bold');
		}
		if (e.key === 'i') {
			e.preventDefault();
			execCmd('italic');
		}
		if (e.key === 'u') {
			e.preventDefault();
			execCmd('underline');
		}
	}
});

// Toolbar formatting buttons
document.querySelectorAll('.tbtn[data-cmd]').forEach(btn => {
	btn.addEventListener('click', () => {
		const cmd = btn.dataset.cmd;
		const val = btn.dataset.val;
		execCmd(cmd, val);
		updateStats();
	});
});

// Link button
D.linkBtn.addEventListener('click', () => {
	const url = prompt('Enter URL (e.g. https://example.com):');
	if (url && url.trim()) execCmd('createLink', url.trim());
});

// Variables dropdown
D.varBtn.addEventListener('click', e => {
	e.stopPropagation();
	saveRange();
	const open = D.varDd.classList.contains('open');
	closeAllDds();
	if (!open) D.varDd.classList.add('open');
});
D.varDd.addEventListener('click', e => {
	const item = e.target.closest('.dd-item[data-v]');
	if (item) {
		insertText(item.dataset.v);
		D.varDd.classList.remove('open');
		toast('in', 'Variable inserted', `${item.dataset.v} added to prompt.`);
	}
});

// Insert file dropdown
D.insFileBtn.addEventListener('click', e => {
	e.stopPropagation();
	saveRange();
	const open = D.insFileDd.classList.contains('open');
	closeAllDds();
	if (!open) D.insFileDd.classList.add('open');
});
D.insFileDd.addEventListener('click', e => {
	const item = e.target.closest('.dd-item[data-fn]');
	if (item) {
		insertText(`[File: ${item.dataset.fn}]`);
		D.insFileDd.classList.remove('open');
	}
});

// File ref panel clicks
D.frefLst.addEventListener('click', e => {
	const item = e.target.closest('.fref-item');
	if (item) insertText(`[File: ${item.dataset.fn}]`);
});

// More options dropdown
D.moreBtn.addEventListener('click', e => {
	e.stopPropagation();
	const open = D.moreDd.classList.contains('open');
	closeAllDds();
	if (!open) D.moreDd.classList.add('open');
});

D.expMdBtn.addEventListener('click', () => {
	const txt = plainText();
	if (!txt.trim()) {
		toast('er', 'Nothing to export', 'Write a prompt first.');
		return;
	}
	const md = `# Prompt\n\n**Model:** ${S.model.name}  \n**Files:** ${S.files.map(f=>f.name).join(', ')||'None'}\n\n---\n\n${txt}`;
	downloadFile('my-prompt.md', md);
	D.moreDd.classList.remove('open');
	toast('ok', 'Exported!', 'Saved as Markdown file.');
});

D.expJsonBtn.addEventListener('click', () => {
	const txt = plainText();
	if (!txt.trim()) {
		toast('er', 'Nothing to export', 'Write a prompt first.');
		return;
	}
	const obj = {
		model: S.model.name,
		files: S.files.map(f => ({
			name: f.name,
			type: f.type,
			size: f.size
		})),
		prompt: txt,
		exportedAt: new Date().toISOString()
	};
	downloadFile('my-prompt.json', JSON.stringify(obj, null, 2));
	D.moreDd.classList.remove('open');
	toast('ok', 'Exported!', 'Saved as JSON file.');
});

D.clearBtn.addEventListener('click', () => {
	if (confirm('Clear all content? This cannot be undone.')) {
		S.files.forEach(f => {
			if (f._url) URL.revokeObjectURL(f._url);
		});
		S.files = [];
		D.promptEd.innerHTML = '';
		renderFiles();
		refreshFilePanels();
		updateStats();
		D.moreDd.classList.remove('open');
		toast('in', 'Cleared', 'All content has been reset.');
	}
});

// Copy / Export
D.cpyPromptBtn.addEventListener('click', handleCopy);
D.cpyPrevBtn.addEventListener('click', handleCopy);
D.contBtn.addEventListener('click', handleCopy);
D.expTxtBtn.addEventListener('click', () => {
	const txt = plainText();
	if (!txt.trim()) {
		toast('er', 'Nothing to export', 'Write a prompt first.');
		return;
	}
	downloadFile('my-prompt.txt', buildExportStr());
	toast('ok', 'Exported!', 'Saved as .txt file.');
});

// Step navigation
D.steps.forEach((s, i) => {
	s.addEventListener('click', () => {
		setStep(i + 1);
		scrollTo(`s${i+1}`);
	});
});

// Intersection Observer to auto-update step nav
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const id = entry.target.id;
			const n = parseInt(id.replace('s', ''));
			if (!isNaN(n)) setStep(n);
		}
	});
}, {
	threshold: 0.5
});
['s1', 's2', 's3', 's4'].forEach(id => {
	const el = document.getElementById(id);
	if (el) observer.observe(el);
});

// Close dropdowns on outside click
document.addEventListener('click', e => {
	if (!e.target.closest('.mdl-wrap')) closeMdlDd();
	if (!e.target.closest('#varBtn') && !e.target.closest('#varDd')) D.varDd.classList.remove('open');
	if (!e.target.closest('#insFileBtn') && !e.target.closest('#insFileDd')) D.insFileDd.classList.remove('open');
	if (!e.target.closest('#moreBtn') && !e.target.closest('#moreDd')) D.moreDd.classList.remove('open');
});

// Escape key closes everything
document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		closeAllDds();
		hideRmModal();
		D.varDd.classList.remove('open');
		D.insFileDd.classList.remove('open');
		D.moreDd.classList.remove('open');
	}
});


// Theme toggle
const mpThemeBtn = document.getElementById('mpThemeBtn');
if (mpThemeBtn) {
    const _syncBuilderLogo = () => {
        const logoImg = document.querySelector('#logoImg');
        if (logoImg) logoImg.src = dark
            ? './assets/images/logo-dark.png'
            : './assets/images/logo-light.png';
    };
    mpThemeBtn.addEventListener('click', () => {
        dark = !dark;
        localStorage.setItem('darkMode', dark);
        applyTheme();
        document.getElementById('mpMoonSvg').style.display = dark ? 'none' : '';
        document.getElementById('mpSunSvg').style.display = dark ? '' : 'none';
        _syncBuilderLogo();
    });
    // Sync icon with current theme on load
    document.getElementById('mpMoonSvg').style.display = dark ? 'none' : '';
    document.getElementById('mpSunSvg').style.display = dark ? '' : 'none';
    _syncBuilderLogo();
}

/* ============================================================
   GENERATE PROMPT — AI-powered
   ============================================================ */
const GP_STEPS = [
	'Analysing your input...',
	'Identifying the core intent...',
	'Selecting the best prompt structure...',
	'Expanding context and constraints...',
	'Injecting formatting rules...',
	'Polishing the output...',
	'Finalising your prompt...'
];

function gpShowOverlay() {
	const ov = document.getElementById('gpOverlay');
	const list = document.getElementById('gpStepList');
	const fill = document.getElementById('gpProgressFill');
	if (!ov) return;
	list.innerHTML = '';
	fill.style.width = '0%';
	ov.classList.add('gp-open');
	document.body.style.overflow = 'hidden';
}

function gpHideOverlay() {
	const ov = document.getElementById('gpOverlay');
	if (ov) ov.classList.remove('gp-open');
	document.body.style.overflow = '';
}

function gpAnimateSteps(onDone) {
	const list = document.getElementById('gpStepList');
	const fill = document.getElementById('gpProgressFill');
	let idx = 0;
	const total = GP_STEPS.length;

	function addStep() {
		if (idx >= total) {
			fill.style.width = '100%';
			setTimeout(onDone, 500);
			return;
		}
		const item = document.createElement('div');
		item.className = 'gp-step gp-step--active';
		item.innerHTML = `<span class="gp-step-dot"></span><span class="gp-step-txt">${GP_STEPS[idx]}</span>`;
		list.appendChild(item);
		list.scrollTop = list.scrollHeight;

		// Mark previous as done
		if (idx > 0) {
			const prev = list.children[idx - 1];
			if (prev) {
				prev.classList.remove('gp-step--active');
				prev.classList.add('gp-step--done');
			}
		}
		fill.style.width = ((idx + 1) / total * 92) + '%';
		idx++;
		setTimeout(addStep, 420 + Math.random() * 280);
	}
	addStep();
}

async function gpGeneratePrompt() {
	const rawText = plainText().trim();
	if (!rawText) {
		toast('er', 'Nothing to generate', 'Write some text in the editor first.');
		return;
	}

	gpShowOverlay();

	const modelName = S.model.name;
	const fileNames = S.files.map(f => f.name).join(', ') || 'none';

	const systemPrompt = `You are an expert AI prompt engineer. Your job is to take a rough user idea and transform it into a clear, structured, effective AI prompt.

Rules:
- Return ONLY the final prompt text, no commentary, no markdown fences, no preamble
- The prompt should be well-structured with a role, task, context, constraints, and output format where relevant
- Preserve the user's intent but enhance clarity, specificity, and structure
- If variables like {{ROLE}}, {{TASK}}, {{CONTEXT}}, {{FORMAT}}, {{TONE}} are appropriate, include them
- Target model: ${modelName}
- Referenced files: ${fileNames}`;

	const userMsg = `Transform this rough idea into a polished AI prompt:\n\n${rawText}`;

	gpAnimateSteps(async () => {
		try {
			const resp = await fetch('https://api.anthropic.com/v1/messages', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					model: 'claude-sonnet-4-20250514',
					max_tokens: 1000,
					system: systemPrompt,
					messages: [{ role: 'user', content: userMsg }]
				})
			});
			const data = await resp.json();
			const generated = data?.content?.[0]?.text || '';
			if (generated) {
				D.promptEd.innerText = generated;
				updateStats();
				gpHideOverlay();
				toast('ok', 'Prompt generated!', 'AI has crafted your prompt.');
				// Scroll to preview
				scrollTo('s4');
			} else {
				throw new Error('Empty response');
			}
		} catch (err) {
			gpHideOverlay();
			toast('er', 'Generation failed', 'Could not connect to AI. Check your API key.');
		}
	});
}

document.getElementById('generatePrompt').addEventListener('click', gpGeneratePrompt);

/* ============================================================
   INITIALIZE
   ============================================================ */
(function init() {
	renderMdlDd();
	syncTrigger(S.model);
	updateStats();
	refreshFilePanels();
	updateCont();
})();

} // end builder-page guard

/* ============================================================
   MOBILE SIDEBAR — Runs on ALL pages
   Handles the hamburger-menu drawer on screens ≤ 768 px.
   Functions are global so HTML onclick= attributes can call them.
   ============================================================ */

/**
 * Open or close the mobile sidebar drawer.
 * Called by the .mob-menu-btn button in the header (onclick="toggleMobSidebar()").
 */
window.toggleMobSidebar = function () {
	const sidebar = document.querySelector('.sidebar');
	const overlay = document.getElementById('mobSidebarOverlay');
	if (!sidebar) return;
	const isOpen = sidebar.classList.contains('mob-sidebar-open');
	if (isOpen) {
		_closeMobSidebar(sidebar, overlay);
	} else {
		sidebar.classList.add('mob-sidebar-open');
		if (overlay) overlay.classList.add('open');
		document.body.style.overflow = 'hidden';
	}
};

/**
 * Close the mobile sidebar drawer.
 * Called by the overlay's onclick= and internally.
 */
window.closeMobSidebar = function () {
	const sidebar = document.querySelector('.sidebar');
	const overlay = document.getElementById('mobSidebarOverlay');
	_closeMobSidebar(sidebar, overlay);
};

/** Internal helper — no DOM query overhead on hot path */
function _closeMobSidebar(sidebar, overlay) {
	if (sidebar) sidebar.classList.remove('mob-sidebar-open');
	if (overlay) overlay.classList.remove('open');
	document.body.style.overflow = '';
}

(function initMobileSidebar() {
	/* Close sidebar when a nav link inside it is tapped */
	document.addEventListener('click', function (e) {
		const sidebar = document.querySelector('.sidebar');
		if (!sidebar || !sidebar.classList.contains('mob-sidebar-open')) return;

		/* If the click target is a nav link (or inside one) inside the sidebar */
		const link = e.target.closest('.nav-link');
		if (link && sidebar.contains(link)) {
			/* Small delay so the navigation has time to register */
			setTimeout(window.closeMobSidebar, 80);
		}
	});

	/* Swipe-left gesture to close sidebar */
	let _touchStartX = 0;
	document.addEventListener('touchstart', function (e) {
		_touchStartX = e.touches[0].clientX;
	}, { passive: true });

	document.addEventListener('touchend', function (e) {
		const sidebar = document.querySelector('.sidebar');
		if (!sidebar || !sidebar.classList.contains('mob-sidebar-open')) return;
		const dx = e.changedTouches[0].clientX - _touchStartX;
		/* Swipe left ≥ 60 px closes the drawer */
		if (dx < -60) window.closeMobSidebar();
	}, { passive: true });

	/* Close on Escape */
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') window.closeMobSidebar();
	});
})();

/* ============================================================
   SHARED HEADER — Docs Modal, Info Modal, Avatar Dropdown
   Runs on ALL pages
   ============================================================ */
(function initSharedHeader() {

	/* ── Docs Modal ──────────────────────────────────────────── */
	const docsBtn   = document.getElementById('hdDocsBtn');
	const docsModal = document.getElementById('hdDocsModal');
	const docsClose = document.getElementById('hdDocsClose');

	function openDocsModal()  { if (docsModal) { docsModal.classList.add('hd-modal-open'); document.body.style.overflow = 'hidden'; } }
	function closeDocsModal() { if (docsModal) { docsModal.classList.remove('hd-modal-open'); document.body.style.overflow = ''; } }

	if (docsBtn)   docsBtn.addEventListener('click', openDocsModal);
	if (docsClose) docsClose.addEventListener('click', closeDocsModal);
	if (docsModal) docsModal.addEventListener('click', e => { if (e.target === docsModal) closeDocsModal(); });

	/* ── Info Modal ──────────────────────────────────────────── */
	const infoBtn   = document.getElementById('hdInfoBtn');
	const infoModal = document.getElementById('hdInfoModal');
	const infoClose = document.getElementById('hdInfoClose');

	function openInfoModal()  { if (infoModal) { infoModal.classList.add('hd-modal-open'); document.body.style.overflow = 'hidden'; } }
	function closeInfoModal() { if (infoModal) { infoModal.classList.remove('hd-modal-open'); document.body.style.overflow = ''; } }

	if (infoBtn)   infoBtn.addEventListener('click', openInfoModal);
	if (infoClose) infoClose.addEventListener('click', closeInfoModal);
	if (infoModal) infoModal.addEventListener('click', e => { if (e.target === infoModal) closeInfoModal(); });

	/* ── Avatar Dropdown ─────────────────────────────────────── */
	const avatarBtn = document.getElementById('hdAvatarBtn');
	const avatarDd  = document.getElementById('hdAvatarDd');

	function openAvatarDd()  { if (avatarDd) avatarDd.classList.add('hd-av-open'); }
	function closeAvatarDd() { if (avatarDd) avatarDd.classList.remove('hd-av-open'); }

	if (avatarBtn) {
		avatarBtn.addEventListener('click', e => {
			e.stopPropagation();
			avatarDd.classList.contains('hd-av-open') ? closeAvatarDd() : openAvatarDd();
		});
	}

	document.addEventListener('click', e => {
		if (!e.target.closest('.hd-avatar-wrap')) closeAvatarDd();
	});

	const signOutBtn = document.getElementById('hdSignOutBtn');
	if (signOutBtn) {
		signOutBtn.addEventListener('click', () => {
			closeAvatarDd();
			toast && toast('in', 'Signed out', 'You have been signed out.');
		});
	}

	/* ── Escape closes all ───────────────────────────────────── */
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			closeDocsModal();
			closeInfoModal();
			closeAvatarDd();
		}
	});

	/* ── Logo swap helper ────────────────────────────────────── */
	function syncLogoTheme() {
		const logoImg = document.querySelector('#logoImg');
		if (!logoImg) return;
		logoImg.src = dark
			? './assets/images/logo-dark.png'
			: './assets/images/logo-light.png';
	}

	/* ── Theme toggle (shared) ───────────────────────────────── */
	const mpThemeBtn = document.getElementById('mpThemeBtn');
	if (mpThemeBtn && !document.getElementById('mdlDd')) {
		// Only run on non-builder pages (builder handles it separately)
		mpThemeBtn.addEventListener('click', () => {
			dark = !dark;
			localStorage.setItem('darkMode', dark);
			applyTheme();
			document.getElementById('mpMoonSvg').style.display = dark ? 'none' : '';
			document.getElementById('mpSunSvg').style.display  = dark ? ''     : 'none';
			syncLogoTheme();
		});
		document.getElementById('mpMoonSvg').style.display = dark ? 'none' : '';
		document.getElementById('mpSunSvg').style.display  = dark ? ''     : 'none';
		syncLogoTheme(); // sync logo on page load too
	}

})();