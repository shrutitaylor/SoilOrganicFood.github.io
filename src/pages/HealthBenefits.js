import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
import './HealthBenefits.css';

export default function AccordionUsage() {
  return (
    <>
    <div style={{alignItems:'center', display:'flex',flexDirection:'column',marginTop:'70px'}}>
    <h2 style={{color: '#5d2510', fontWeight:'800'}}>Health Benefits</h2>
      <h3>Want to know what Organic food does?</h3>
      </div>
    <div className='health'>
        
      <Accordion defaultExpanded className='accordian' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Eat a Variety of Foods
        </AccordionSummary>
        <AccordionDetails>
            <div className='accordian-details'  >
                <img src='https://images.unsplash.com/photo-1620217349590-7b4e3ec6898a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <div>Aim to include a wide range of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet. This ensures that you get a diverse array of nutrients necessary for optimal health</div>
            </div> 
        </AccordionDetails>
      </Accordion>

      <Accordion className='accordian-split' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Portion Control
        </AccordionSummary>
        <AccordionDetails>
        Be mindful of portion sizes to avoid overeating. Use smaller plates and bowls, and listen to your body's hunger and fullness cues
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordian' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Stay Hydrated
        </AccordionSummary>
        <AccordionDetails> Drink plenty of water throughout the day to maintain hydration. Limit sugary drinks and opt for water, herbal teas, or infused water instead

        </AccordionDetails>
      </Accordion>

      <Accordion className='accordian-split' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Balance Macronutrients
        </AccordionSummary>
        <AccordionDetails>
        Strive for a balanced intake of carbohydrates, proteins, and fats. Choose complex carbohydrates, lean proteins, and healthy fats to provide sustained energy and support overall health
        </AccordionDetails>
      </Accordion>

      <Accordion  className='accordian' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Limit Processed Foods
        </AccordionSummary>
        <AccordionDetails> Minimize your consumption of processed and packaged foods, which are often high in added sugars, unhealthy fats, and preservatives. Instead, focus on whole, minimally processed foods
        </AccordionDetails>
      </Accordion>

      <Accordion className='accordian-split' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Mindful Eating
        </AccordionSummary>
        <AccordionDetails>
        Practice mindful eating by paying attention to your food choices, savoring each bite, and eating without distractions. This can help prevent overeating and promote a healthier relationship with food</AccordionDetails>
      </Accordion>
      
      <Accordion  className='accordian' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Include Fiber-Rich Foods
        </AccordionSummary>
        <AccordionDetails>  Incorporate fiber-rich foods like fruits, vegetables, whole grains, legumes, nuts, and seeds into your diet. Fiber aids digestion, supports gut health, and helps you feel full and satisfied</AccordionDetails>
      </Accordion>

      <Accordion className='accordian-split' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Limit Added Sugars and Salt
        </AccordionSummary>
        <AccordionDetails>
        Be mindful of added sugars and sodium in your diet. Choose naturally sweet foods like fruits and opt for herbs, spices, and other flavorings instead of excess salt
        </AccordionDetails>
        </Accordion>
      
        <Accordion className='accordian' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Prioritize Nutrient-Dense Foods
        </AccordionSummary>
        <AccordionDetails>
        Focus on nutrient-dense foods that provide a high concentration of vitamins, minerals, and other essential nutrients without excess calories. Examples include leafy greens, berries, nuts, seeds, and lean proteins</AccordionDetails>
        </Accordion>

        <Accordion className='accordian-split' >
        <AccordionSummary
          expandIcon={<span class="material-symbols-outlined">expand_more </span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Seek Professional Guidance
        </AccordionSummary>
        <AccordionDetails>
        If you have specific dietary needs or health concerns, consider consulting with a registered dietitian or nutritionist for personalized advice and guidance
        </AccordionDetails>
        </Accordion>
    </div>
    </>
  );
}