#!/usr/bin/env python3
"""
Generátor GIFu pro turnaj 2026
Vytváří animovaný GIF se jménem turnaje a datem konání.
"""

import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import os

def generate_tournament_gif(output_path="public/gif/lukavecky-turnaj-2026.gif"):
    """Vygeneruje GIF pro turnaj s datem a textem."""
    
    # Načtení dat turnaje
    with open("content/tournament.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Parametry GIFu
    width, height = 1200, 400
    background_color = (25, 25, 50)  # Tmavě modrá
    text_color = (255, 255, 255)     # Bílá
    accent_color = (59, 130, 246)    # Modrá (blue-600)
    
    frames = []
    durations = []
    
    # Frame 1: Nadpis turnaje (statický)
    frame1 = Image.new("RGB", (width, height), background_color)
    draw1 = ImageDraw.Draw(frame1)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
        subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 40)
        date_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 80)
    except:
        # Fallback na defaultní font
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        date_font = ImageFont.load_default()
    
    # Nadpis
    title = "25. ročník turnaje"
    draw1.text((width//2, 80), title, fill=text_color, font=title_font, anchor="mm")
    
    # Podnázev
    subtitle = "O pohár obce Lukavec"
    draw1.text((width//2, 160), subtitle, fill=accent_color, font=subtitle_font, anchor="mm")
    
    # Datum - bude se objevovat postupně
    date_text = "1. 8. 2026"
    # Výška pro datum - v dolní části
    date_y = 300
    
    frames.append(frame1)
    durations.append(800)
    
    # Frames 2-5: Postupné objevování se data
    for i in range(1, 5):
        frame = Image.new("RGB", (width, height), background_color)
        draw = ImageDraw.Draw(frame)
        
        # Nadpis a podnázev
        draw.text((width//2, 80), title, fill=text_color, font=title_font, anchor="mm")
        draw.text((width//2, 160), subtitle, fill=accent_color, font=subtitle_font, anchor="mm")
        
        # Postupné zvětšování data
        alpha = (i / 4) * 255  # Postupné zvětšení viditelnosti
        date_scale = 1.0 + (i / 4) * 0.3  # Zvětšení
        
        # Prostý text datumu
        draw.text((width//2, date_y), date_text, fill=accent_color, font=date_font, anchor="mm")
        
        frames.append(frame)
        durations.append(400)
    
    # Frame posledni: Kompletní zobrazení
    frame_final = Image.new("RGB", (width, height), background_color)
    draw_final = ImageDraw.Draw(frame_final)
    
    draw_final.text((width//2, 80), title, fill=text_color, font=title_font, anchor="mm")
    draw_final.text((width//2, 160), subtitle, fill=accent_color, font=subtitle_font, anchor="mm")
    draw_final.text((width//2, date_y), date_text, fill=accent_color, font=date_font, anchor="mm")
    
    frames.append(frame_final)
    durations.append(1500)
    
    # Uložení GIFu
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        optimize=False,
    )
    
    print(f"✓ GIF vytvořen: {output_path}")
    print(f"  Rozměry: {width}x{height}px")
    print(f"  Framy: {len(frames)}")

if __name__ == "__main__":
    generate_tournament_gif()
