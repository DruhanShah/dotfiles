#version 430

/*
 * picom internal glow shader
 *
 * Effect: The glow is strongest at the bottom center of the window
 * and fades out smoothly towards the sides and top.
 *
 * --- How to use in picom ---
 *
 * 1. Save this file to your config directory, e.g.:
 * ~/.config/picom/shaders/bottom_glow.frag
 *
 * 2. In your picom.conf file, add the following rule:
 *
 * window-shader-fg-rule = [
 * "/home/your_username/.config/picom/shaders/inner_glow.frag:focused"
 * ];
 *
 * 3. Important: Make sure to replace "/home/your_username/" with the
 * actual absolute path to your home directory.
 *
 * 4. Restart picom for the changes to take effect.
 *
 */

// --- Required variable declarations ---
in vec2 texcoord;
uniform sampler2D tex;

// --- Define your preferred glow color and width here ---
#define GLOW_COLOR vec3(0.6, 0.4, 1.0) // A more modern, bright purple
#define GLOW_WIDTH 16.0                  // The vertical width of the glow (in pixels)

// Declare picom's built-in post-processing function
vec4 default_post_processing(vec4 c);

// picom requires us to define this function
vec4 window_shader() {
    // Use textureSize to get the exact pixel dimensions of the window
    ivec2 window_size = textureSize(tex, 0);

    // Get the original pixel color
    vec4 original_color = texelFetch(tex, ivec2(texcoord), 0);

    // **Crucial step**: Call picom's default post-processing first
    vec4 c = default_post_processing(original_color);

    // --- Bottom-center glow logic ---

    // 1. Calculate vertical intensity (fades from bottom to top)
    float dist_from_bottom = float(window_size.y) - texcoord.y;
    float vertical_intensity = 1.0 - smoothstep(0.0, GLOW_WIDTH, dist_from_bottom);

    // 2. Calculate horizontal intensity (fades from center to sides)
    float center_x = float(window_size.x) / 2.0;
    float dist_from_center_x = abs(texcoord.x - center_x);
    float horizontal_intensity = 1.0 - smoothstep(0.0, center_x, dist_from_center_x);

    // 3. The final intensity is the product of vertical and horizontal intensities
    float final_intensity = vertical_intensity * horizontal_intensity;

    // 4. Mix the glow color with the original color based on the final intensity
    //    Multiplying by 0.7 controls the maximum opacity of the glow to avoid complete coverage
    c.rgb = mix(c.rgb, GLOW_COLOR, final_intensity * 0.7);

    // Return the final color
    return c;
}