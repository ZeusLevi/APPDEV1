import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  product = {
    model: 'KB-X1000',
    overview: `The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience.`,
    specifications: [
      { label: 'Switch Type', value: 'Cherry MX Red (Mechanical)' },
      { label: 'Key Layout', value: 'Full-size (104 keys)' },
      { label: 'Backlighting', value: 'RGB with customizable colors' },
      { label: 'Connectivity', value: 'Wired (USB 2.0)' },
      { label: 'Dimensions', value: '440 mm x 135 mm x 35 mm' },
      { label: 'Weight', value: '1.2 kg' },
      { label: 'Cable Length', value: '1.8 meters' },
      { label: 'Additional Features', value: 'Anti-ghosting, N-key rollover, dedicated media controls' }
    ],
    inBox: [
      'KB-X1000 Keyboard',
      'USB Cable',
      'User Manual',
      'Keycap Removal Tool',
      'Warranty Card'
    ],
    features: [
      'Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.',
      'Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.',
      'Programmable Keys: Assign macros and custom functions to any key with the included software.',
      'Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.',
      'Dedicated Media Controls: Easily control music and videos with dedicated media keys.'
    ],
    setup: {
      unboxing: [
        'Carefully remove the keyboard and accessories from the box.'
      ],
      connecting: [
        'Plug the USB cable into an available USB port on your computer.',
        'The keyboard should be automatically recognized and ready for use. No additional drivers are required.'
      ],
      software: [
        'Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.',
        'Follow the on-screen instructions to install the software.'
      ],
      keycap: [
        'Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.',
        'Replace keycaps by aligning them over the switch and pressing down until they click into place.'
      ]
    },
    usage: {
      typing: [
        'Simply start typing; the keyboard is pre-configured with standard key mappings.'
      ],
      backlighting: [
        'Press Fn + F9 to cycle through preset lighting effects.',
        'Use the configuration software to create custom lighting profiles.'
      ],
      programming: [
        'Open the configuration software.',
        'Select the key you want to program.',
        'Assign a macro or function and save your changes.'
      ],
      media: [
        'Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.'
      ]
    },
    troubleshooting: [
      {
        issue: 'Keyboard Not Responding',
        steps: [
          'Ensure the USB connection is secure.',
          'Try connecting the keyboard to a different USB port.',
          'Restart your computer if necessary.'
        ]
      },
      {
        issue: 'Backlighting Not Working',
        steps: [
          'Check if the backlight is disabled or set to a minimal brightness level.',
          'Verify that the configuration software is properly installed.'
        ]
      },
      {
        issue: 'Key Not Registering',
        steps: [
          'Confirm that no physical obstructions are affecting the key.',
          'Test the key in different applications to determine if the issue is software-related.'
        ]
      }
    ],
    maintenance: {
      cleaning: [
        'Disconnect the keyboard from the computer.',
        'Use a soft, dry cloth to clean the surface.',
        'For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.'
      ],
      storage: [
        'Store the keyboard in a cool, dry place.',
        'Avoid exposure to liquids or extreme temperatures.'
      ]
    },
    warranty: {
      period: '2 years from the date of purchase.',
      support: [
        'For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.'
      ],
      website: 'www.keyboardcompany.com',
      email: 'support@keyboardcompany.com',
      hotline: '1-800-555-1234'
    },
    thankYou: 'Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!'
  };
}

