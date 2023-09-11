import "./style.css"
import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF,useAnimations} from "@react-three/drei"

export function Model1(props) {
  const { nodes, materials } = useGLTF('/models/mouse/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}  scale={0.3}>
        <mesh geometry={nodes.R_Mouse_00_R_Mouse_0.geometry} material={materials.R_Mouse} position={[0, 3.403, 0.868]} />
      </group>
    </group>
  )
}
export function Model2(props) {
  const { nodes, materials } = useGLTF('/models/drone/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.grey} />
        <lineSegments geometry={nodes.Object_9.geometry} material={materials.grey} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.grey} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.grey} />
      </group>
    </group>
  )
}
export function Model3(props) {
  const { nodes, materials } = useGLTF('/models/iphone/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.2} position={[0,-1.5,0]}>
        <mesh geometry={nodes.UCttAeyROPsgmix.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.XbtrdVaOWYmkEiU.geometry} material={materials.YiceMpFVTpnmoaq} />
        <mesh geometry={nodes.YbXWdqEcjbfTKuN_0.geometry} material={materials.GFNYbWjyDVGUwJd} />
        <mesh geometry={nodes.rrqFqyfckTuyRuI.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={nodes.lxsKwuOPNvmzBKg_0.geometry} material={materials.KhJiSWFcsscOusf} />
        <mesh geometry={nodes.alSOKOYgFKIcUtR.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={nodes.FjhETOCBEeiBmch.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.AbxQOpRbGREHXRG.geometry} material={materials.IDdMwJVCyuFpUnA} />
        <mesh geometry={nodes.tWfjYtMZCfucxRt.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={nodes.vauUojKrKkLLDtY.geometry} material={materials.HvAGJeQTAiWbceX} />
        <mesh geometry={nodes.yqmgDmvGsmuPwXx_0.geometry} material={materials.bmOZLlCkCKhIIVe} />
        <mesh geometry={nodes.wjSYkRykuFHJNPw.geometry} material={materials.KxzouvBYEgdZhMo} />
        <mesh geometry={nodes.rJeCWUNsVVXXAbI.geometry} material={materials.psePdsxZprlxGrw} />
        <mesh geometry={nodes.rqSonbcVVSPWFfa_0.geometry} material={materials.jFPFAvCbiqflbQV} />
        <mesh geometry={nodes.OMkeKbwVHRBkBwM.geometry} material={materials.IkWzRHNnDaKQXIi} />
        <mesh geometry={nodes.DLfIUIalXuQjJsL.geometry} material={materials.pBMikDFQfUOsKkr} />
        <mesh geometry={nodes.KABLQLZRuEbcLWk.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={nodes.qjXEDwnnBYwWcJn.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.FGDSbHbILfUmiaH.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.jQXfQpudiYObSGp.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={nodes.knexoFNknstHgiO.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.FaUtifOQSMTXiZM.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.BhvzCWikxrVeDTV.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.MMkajxMNWrwGQfi.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.YnrVhXEUDbStWCs.geometry} material={materials.EJpkIDZfhPDUzel} />
        <mesh geometry={nodes.ePYqawqlCJbCsNi.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={nodes.RGbIswEcCTzqNsn_0.geometry} material={materials.FlDKBWPodPcEeGy} />
        <mesh geometry={nodes.IuMgFUHIyRWENxG_0.geometry} material={materials.LcWBQfBvCzxThpp} />
        <mesh geometry={nodes.dNDonqESZOxUcei_0.geometry} material={materials.LUbRMhkIhuekQRK} />
        <mesh geometry={nodes.XeFHhVBtRZWPGxR.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.nJYGEbPQybRBbiN.geometry} material={materials.tDZQoaroJfCIQtF} />
        <mesh geometry={nodes.JyAbjubWrOdfygC_0.geometry} material={materials.jFPFAvCbiqflbQV} />
        <mesh geometry={nodes.nxFoHsySvfcSLvp.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.oCklTGvTZoDWJrC_0.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.QaGkMzxNzKPcqRy.geometry} material={materials.iEhZxWeNLTDdgxm} />
        <mesh geometry={nodes.KUDomTaVduCyevu.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.QOfJIBEXOvXfSUh.geometry} material={materials.vsSJQngPxBJTVZb} />
        <mesh geometry={nodes.RUMRNTkptJGDMpy.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={nodes.aYjPeBrpBRopJbp.geometry} material={materials.xHgtbqndQshkTKG} />
        <mesh geometry={nodes.BeQtuLXtpSTrzAH.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.tWBbDznHihIxXam.geometry} material={materials.OStzgRHtVBLWwiD} />
        <mesh geometry={nodes.PLFTnNQeqVAxicS.geometry} material={materials.BLpVAsLWNICZYGG} />
        <mesh geometry={nodes.GWEiavWnRxbogtw_0.geometry} material={materials.FsunUcGyajFpQmW} />
        <mesh geometry={nodes.RFqaqXLpuCDBIGV_0.geometry} material={materials.nJRBoEsOhzMSqCz} />
        <mesh geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={nodes.BDLCJBydsNjizog_0.geometry} material={materials.fGwijctGaiRaYJC} />
        <mesh geometry={nodes.zPPSOvNamLQVyvv.geometry} material={materials.qEGySvwsouNnVcn} />
        <mesh geometry={nodes.YPGjoywokSeoQFr.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.MoTJNOoMxqdxNvQ.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={nodes.mZxrNiCtMrMjOMv.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={nodes.tQCDizUpBYNcvFA.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.CAQeTxdpUcbxQyT.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.qsTxqfACkdoWeLQ.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={nodes.aVmapfDgqkPkjUf.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={nodes.lgnGJJmNebyRbHq_0.geometry} material={materials.rNCplyWedyfORFh} />
      </group>
    </group>
  )
}

export function Project3D(){
    return(
        <div className="Project3D">
          <Canvas className="Canvas">
            <ambientLight intensity={1.5} />
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={[0,0,0]}/>
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model1 />
          </Canvas>
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={[0,0,0]}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model2/>
          </Canvas>
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={[0,0,0]}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model3/>
          </Canvas>
        </div>
    )
}