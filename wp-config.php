<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\wp-content\plugins\wp-super-cache/' );
define('DB_NAME', 'apolonia');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'vladi');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'L)KZIL-Cd#xz>Z=;6TWt#EY2xN|^7sV1:}BuW_ECtCh2L/D)7~G3AP/Sh7[/2Qz{');
define('SECURE_AUTH_KEY',  '+kb=1zA3kdwleR(HkB1^Z~Q95KucE50SfyEn7OFJ (3IN5omM&b4;4eOxUuy1vCa');
define('LOGGED_IN_KEY',    'U%F%fV!EWw&]}i<`(Jerv#D:dL/Wh2DHY#<DP(%tS*M4AP<p,mXEYHWkBp=JwobB');
define('NONCE_KEY',        ':qP<dH}FOnc5*tp@p<Rs9DCM*-KG LXbC2;qQ!|[wQt$FN(dBgQ5(y+t[1.A?6y5');
define('AUTH_SALT',        'KS*s8=HM_u-lBjtv{oBlQg^]uBLxM<B,!J@9VYN:PWjWY7e3/)Sz@/$?R|Tm13Xr');
define('SECURE_AUTH_SALT', 'HK,b3 ,},02U5<G`>zAzQ~rlj(vFTYE!s.>~.[HGBXg`eKM3Kz._eP!DAZfQhaF-');
define('LOGGED_IN_SALT',   '{GW9UUghQ+vhVVw}576fHi_KY[T)xFY /s@WLZ+*Inqfv:+L2C?-uE@(|<%%X#3N');
define('NONCE_SALT',       'ZF D]r{87Pu#ecy3T,coffnWBrXcEABM0xLr53<Sj_Z[z}5y$re^R`b;zF}[,l^5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
