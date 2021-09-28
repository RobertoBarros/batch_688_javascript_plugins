import { fetchMovies, updateResultList } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';


fetchMovies('Lord of the rings');

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', updateResultList);

initSortable();
initMarkdown();
initSelect2();
