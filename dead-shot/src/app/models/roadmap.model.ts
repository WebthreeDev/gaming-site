import { environment } from "src/environments/environment";
import { Roadmap } from "../interfaces/roadmap.interface";

export const RoadmapData: Roadmap[] = [
    {
        stage: 1, stage_display_name: 'stage i', details: ['Project ideation', 'Idea validation', 'Team Development', 'Strategy Planning', 'Game development'], image: `${environment.Images}roadmap/stage-1.jpg`
    },
    {
        stage: 2, stage_display_name: 'stage ii', details: ['Social Media Setup', 'Marketing ', 'Community Development ', 'Website launch ', '3D Character release ', 'Private sale', 'Public sale', 'Beta Game launch ', 'PancakeSwap Launch ', 'NFT Listing'], image: `${environment.Images}roadmap/stage-2.jpg`
    },
    {
        stage: 3, stage_display_name: 'stage iii', details: ['Staking Contract release', 'Staking & NFT contract Audit', 'Game launch with staking', 'Marketplace'], image: `${environment.Images}roadmap/stage-3.jpg`
    },
    {
        stage: 4, stage_display_name: 'stage iv', details: ['User generated NFT', 'New Terrains ', 'Exchange Listing ', 'Improve UI/UX','Ecosystem Development'], image: `${environment.Images}roadmap/stage-4.jpg`
    }
];