require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import carousel from '../functions/carousel';
import responsiveNavbar from '../functions/responsive_navbar'

carousel();
responsiveNavbar();
